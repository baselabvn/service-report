import { ValidatedRequest } from '#types/express'
import generateHander from '#utils/generateHandler'
import { getElectricReport } from '#httpRequest/getElectricReport'
import { SuccessResponse } from '#types/http'
import { ValidatedElectricBody, ValidatedExportExcelBody } from '#types/electric'

export const index = generateHander<ValidatedRequest>(async (req, res, next) => {
    try {
        const message = req.message
        const { deviceId, from, to } = req.body as ValidatedElectricBody

        const response = await getElectricReport(req.projectId, deviceId, from, to)

        if (!response.success) throw new Error(response.message)

        res.json({
            success: true,
            message: message.common.SUCCESS,
            data: response.data
        } as SuccessResponse<any>)
    } catch (err: any) {
        next(err)
    }
})

export const exportExcel = generateHander<ValidatedRequest>(async (req, res, next) => {
    try {
        const message = req.message
        const { deviceId, from, to } = req.body as ValidatedExportExcelBody

        const response = await getElectricReport(req.projectId, deviceId, from, to)

        if (!response.success) throw new Error(response.message)

        res.json({
            success: true,
            message: message.common.SUCCESS,
            data: response.data
        } as SuccessResponse<any>)
    } catch (err: any) {
        next(err)
    }
})

export default {
    index,
    exportExcel
}