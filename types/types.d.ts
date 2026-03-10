type Env = {
    APP_DEBUG?: string
    PORT?: string
    CORS_ORIGIN?: string
    GRPC_PORT?: string
    MONGO_HOST?: string
    MONGO_PORT?: string
    MONGO_DATABASE?: string
    MONGO_USERNAME?: string
    MONGO_PASSWORD?: string
    SOCKET_TIMEOUT?: string
    SOCKET_INTERVAL?: string
    ACCESS_TOKEN?: string
    PROJECT_SERVICE?: string
    PROJECT_GRPC?: string
    PROJECT_ACCESS_TOKEN?: string
    IOT_GATEWAY?: string
    IOT_ACCESS_TOKEN?: string
    TIME_ZONE?: string
}

declare namespace NodeJS {
    interface ProcessEnv extends Env {}
}