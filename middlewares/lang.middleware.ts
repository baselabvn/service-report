import { Request, Response, NextFunction } from 'express'
import { translate } from '#messages/index'
import { Lang } from '#types/common'

function lang(req: Request, res: Response, next: NextFunction) {
    const lang = req.headers['lang'] as Lang | undefined

    req.message = translate(lang)
 
    next()
}

export default lang 