import { Router } from 'express'
import controller from '#controllers/electric.controller'
import middleware from '#middlewares/electric.middleware'
import headers from '#middlewares/headers.middleware'

const route: Router = Router()

route.use(headers)

route.post('/', [middleware.index], controller.index)
route.post('/export-excel', [middleware.exportExcel], controller.exportExcel)

export default route