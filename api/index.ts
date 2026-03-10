import { Router } from 'express'
import { app } from '#server'
import { errorHandle } from '#middlewares/error.middleware'
import auth from '#middlewares/auth.middleware'
import lang from '#middlewares/lang.middleware'
import electric from '#api/electric.route'

const api: Router = Router()

app.use(lang)
app.use(auth)

api.use('/electric', electric)

app.use('/api', api)

app.use(errorHandle)