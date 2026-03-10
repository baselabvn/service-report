import { Request, Response, NextFunction, RequestHandler } from 'express'

type Handler<T> = (req: T, res: Response, next: NextFunction) => Promise<void> | void

function generateHander<T extends Request>(handler: Handler<T>): RequestHandler {
    return handler as any
}

export default generateHander