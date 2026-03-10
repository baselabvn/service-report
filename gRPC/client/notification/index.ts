import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import INotificationServiceClient from './INotificationService'

const { NOTIFICATION_GRPC } = process.env

const packageDef = protoLoader.loadSync(path.join(__dirname, './notification.proto'), {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
})
const grpcObject = grpc.loadPackageDefinition(packageDef) as any

const notificationServiceClient: INotificationServiceClient = new grpcObject.notification.NotificationService(
    NOTIFICATION_GRPC,
    grpc.credentials.createInsecure()
)

export default notificationServiceClient