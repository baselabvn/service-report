import { Priority } from '#types/project'
import { Client, ServiceError } from '@grpc/grpc-js'

export type SendVerifyMailRequest = {
    to: string
    token: string
}

export type SendVerifyMailResponse = {
    success: boolean
    message: string
}

export type SendPasswordResetMailRequest = {
    to: string
    token: string
}

export type SendPasswordResetMailResponse = {
    success: boolean
    message: string
}

export type SendPasswordResetSuccessMailRequest = {
    to: string
}

export type SendPasswordResetSuccessMailResponse = {
    success: boolean
    message: string
}

export type SendProjectInviteRequest = {
    inviter: string
    to: string
    projectName: string
    application: string
}

export type SendProjectInviteResponse = {
    success: boolean
    message: string
}

export type SendRemoveMemberMailRequest = {
    from: string
    to: string
    projectName: string
    application: string
}

export type SendRemoveMemberMailResponse = {
    success: boolean
    message: string
}

export type SendChangeRoleMailRequest = {
    from: string
    to: string
    projectName: string
    application: string
    role: string
}

export type SendChangeRoleMailResponse = {
    success: boolean
    message: string
}

export type SendNotificationRequest = {
    userIds: string[]
    title: string
    message: string
    priority: Priority
}

export type SendNotificationResponse = {
    success: boolean
    message: string
}

interface INotificationServiceClient extends Client {
    SendVerifyMail(
        request: SendVerifyMailRequest,
        callback: (err: ServiceError | null, response: SendVerifyMailResponse) => void
    ): void

    SendPasswordResetMail(
        request: SendPasswordResetMailRequest,
        callback: (err: ServiceError | null, response: SendPasswordResetMailResponse) => void
    ): void

    SendPasswordResetSuccessMail(
        request: SendPasswordResetSuccessMailRequest,
        callback: (err: ServiceError | null, response: SendPasswordResetSuccessMailResponse) => void
    ): void

    SendProjectInvite(
        request: SendProjectInviteRequest,
        callback: (err: ServiceError | null, response: SendProjectInviteResponse) => void
    ): void

    SendRemoveMemberMail(
        request: SendRemoveMemberMailRequest,
        callback: (err: ServiceError | null, response: SendRemoveMemberMailResponse) => void
    ): void

    SendChangeRoleMail(
        request: SendChangeRoleMailRequest,
        callback: (err: ServiceError | null, response: SendChangeRoleMailResponse) => void
    ): void

    SendNotification(
        request: SendNotificationRequest,
        callback: (err: ServiceError | null, response: SendNotificationResponse) => void
    ): void
}

export default INotificationServiceClient