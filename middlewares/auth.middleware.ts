import generateHandler from '#utils/generateHandler'
import { ErrorResponse } from '#types/http'
import { RequestWithMessage } from '#types/express'
import { isArray } from '#utils/checkType'

const { ACCESS_TOKEN } = process.env

export const auth = generateHandler<RequestWithMessage>(async (req, res, next) => {
    const { message } = req

    try {
        const accessToken = req.headers['x-access-token']

        if (!accessToken || isArray(accessToken)) throw new Error(message.common.INVALID_ACCESS_TOKEN)
        if (accessToken !== ACCESS_TOKEN) throw new Error(message.common.INVALID_ACCESS_TOKEN)

        next()
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message,
            errors: {}
        } as ErrorResponse)
    }
})


export default auth