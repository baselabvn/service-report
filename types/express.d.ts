import { Message } from '#messages/index'
import type { Request } from 'express'

type User = {
    id: string
    username: string
    avatar: string
}

declare global {
    namespace Express {
        interface Request {
            user?: User
            projectId?: string
            message?: Message
        }
    }
}

interface RequestWithMessage extends Request {
    user?: User
    projectId?: string
    message: Message
}

interface ValidatedRequest extends Request {
    user: User
    projectId: string
    message: Message
}

export {
    RequestWithMessage,
    ValidatedRequest
}