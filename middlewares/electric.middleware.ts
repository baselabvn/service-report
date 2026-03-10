import { ElectricBody, ExportExcelBody } from '#types/electric'
import { RequestWithMessage } from '#types/express'
import { ErrorResponse } from '#types/http'
import { isNull, isString, isUndefined } from '#utils/checkType'
import generateHander from '#utils/generateHandler'

export const index = generateHander<RequestWithMessage>(async (req, res, next) => {
    try {
        const message = req.message
        const { deviceId, from, to } = req.body as ElectricBody

        if (isNull(deviceId) || isUndefined(deviceId)) throw new Error(message.electric.DEVICE_ID_EMPTY)
        if (!isString(deviceId)) throw new Error(message.electric.DEVICE_ID_NOT_STRING)

        if (isNull(from) || isUndefined(from)) throw new Error(message.electric.FROM_DATE_EMPTY)
        if (!isString(from)) throw new Error(message.electric.FROM_DATE_NOT_STRING)

        if (isNull(to) || isUndefined(to)) throw new Error(message.electric.TO_DATE_EMPTY)
        if (!isString(to)) throw new Error(message.electric.TO_DATE_NOT_STRING)

        next()
    } catch (err: any) {
        res.json({
            success: false,
            message: err.message,
            errors: {}
        } as ErrorResponse)
    }
})

export const exportExcel = generateHander<RequestWithMessage>(async (req, res, next) => {
    try {
        const message = req.message
        const { deviceId, from, to } = req.body as ExportExcelBody

        if (isNull(deviceId) || isUndefined(deviceId)) throw new Error(message.electric.DEVICE_ID_EMPTY)
        if (!isString(deviceId)) throw new Error(message.electric.DEVICE_ID_NOT_STRING)

        if (isNull(from) || isUndefined(from)) throw new Error(message.electric.FROM_DATE_EMPTY)
        if (!isString(from)) throw new Error(message.electric.FROM_DATE_NOT_STRING)

        if (isNull(to) || isUndefined(to)) throw new Error(message.electric.TO_DATE_EMPTY)
        if (!isString(to)) throw new Error(message.electric.TO_DATE_NOT_STRING)

        next()
    } catch (err: any) {
        res.json({
            success: false,
            message: err.message,
            errors: {}
        } as ErrorResponse)
    }
})

export default {
    index,
    exportExcel
}