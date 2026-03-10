import { Client, ClientReadableStream, ServiceError } from '@grpc/grpc-js'

export type Permission = {
    id: string
    name: string
}

export type Role = {
    id: string
    name: string
    permissions: Permission[]
}

export type GetRolesRequest = {}

export type GetRolesResponse = {
    roles: Role[]
}

export type User = {
    id: string
    username: string
    email: string
    emailConfirmed: boolean
    avatar?: string
    isActive: boolean
    deleted: boolean
    createdAt: string
    updatedAt: string
}

export type GetUserByIdRequest = {
    id: string
}
export type GetUserByIdResponse = {
    user?: User
}

export type WatchUserRequest = {}

export type WatchUserResponse = {
    user: User
}

interface IAuthServiceClient extends Client {
    GetRoles(
        request: GetRolesRequest,
        callback: (err: ServiceError | null, response: GetRolesResponse) => void
    ): void
    
    WatchRoles(
        request: GetRolesRequest
    ): ClientReadableStream<GetRolesResponse>

    GetUserById(
        request: GetUserByIdRequest,
        callback: (err: ServiceError | null, response: GetUserByIdResponse) => void
    ): void

    WatchUser(
        request: WatchUserRequest
    ): ClientReadableStream<WatchUserResponse>
}

export default IAuthServiceClient