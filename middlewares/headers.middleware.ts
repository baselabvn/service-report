import generateHandler from '#utils/generateHandler'
import { ErrorResponse } from '#types/http'
import { RequestWithMessage } from '#types/express'

export const headers = generateHandler<RequestWithMessage>(async (req, res, next) => {
    const { message } = req

    try {
        const userId = req.headers['x-user-id']
        const username = Buffer.from(req.headers['x-username'] as Base64URLString, 'base64').toString('utf8')
        const avatar = req.headers['x-avatar']
        const projectId = req.headers['x-project-id']

        if (!userId) throw new Error(message.common.USER_ID_EMPTY)
        if (!username) throw new Error(message.common.USERNAME_EMPTY)
        if (!projectId) throw new Error(message.common.PROJECT_ID_EMPTY)

        req.projectId = projectId as string
        
        req.user = {
            id: userId as string,
            username: username as string,
            avatar: avatar as string
        }

        next()
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message,
            errors: {}
        } as ErrorResponse)
    }
})


export default headers