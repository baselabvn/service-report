import { IncomingHttpHeaders } from 'http'

export type Packet = {
    type: 'ping' | 'pong' | 'message'
    data?: string
    options?: {
        compress?: boolean
    }
}

type Headers = {
    mac?: string
    ip?: string
    firmware?: string
}

export type SocketHeaders = IncomingHttpHeaders & Headers