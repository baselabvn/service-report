import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import IAuthServiceClient from './IAuthService'

const { AUTH_GRPC } = process.env

const packageDef = protoLoader.loadSync(path.join(__dirname, './auth.proto'), {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
})
const grpcObject = grpc.loadPackageDefinition(packageDef) as any

const authServiceClient: IAuthServiceClient = new grpcObject.auth.AuthService(
    AUTH_GRPC,
    grpc.credentials.createInsecure()
)

export default authServiceClient