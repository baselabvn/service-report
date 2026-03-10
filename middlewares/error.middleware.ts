import { ErrorResponse } from '#types/http'
import { Request, Response, NextFunction } from 'express'

export function errorHandle(err: Error, req: Request, res: Response, next: NextFunction) {
    res.status(500).json({
        success: false,
        message: err.message,
        errors: {}
    } as ErrorResponse)
}

export default {
    errorHandle
}