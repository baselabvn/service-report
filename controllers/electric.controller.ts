import { ValidatedRequest } from '#types/express'
import generateHander from '#utils/generateHandler'
import { getElectricReport } from '#httpRequest/getElectricReport'
import { SuccessResponse } from '#types/http'
import { ValidatedElectricBody, ValidatedExportExcelBody } from '#types/electric'
import moment from 'moment'
import path from 'path'
import fs from 'fs'
import { PATH } from '#configs/app.config'

const xlsxPopulate = require('xlsx-populate')


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

        const responseData = response.data as any
        const reportList = responseData?.data || []

        const templatePath = `${PATH.STORAGE}/template/Template_Consump.xlsx`
        const workbook = await xlsxPopulate.fromFileAsync(templatePath)

        const sheet = workbook.sheet(1) // 0-based for xlsxPopulate, so index 1 is the 2nd sheet

        reportList.forEach((item: any, index: number) => {
            const formattedDate = moment(item.date).format('DD/MM/YYYY')

            const rowNumber = index + 3 // 1-based, start at row 3 (STT: A3)

            sheet.cell(`A${rowNumber}`).value(index + 1) // STT
            sheet.cell(`B${rowNumber}`).value(formattedDate) // Thời gian
            sheet.cell(`C${rowNumber}`).value(item.powerConsump) // Lượng tiêu thụ
            sheet.cell(`D${rowNumber}`).value(item.reactConsump) // Lượng phản kháng
            sheet.cell(`E${rowNumber}`).value(0) // Tiền điện
        })

        const timestamp = new Date().getTime()
        const reportFileName = `Report_${deviceId}_${timestamp}.xlsx`
        const reportPath = `${PATH.STORAGE}/report/${reportFileName}`

        await workbook.toFileAsync(reportPath)

        res.setHeader('File-Name', reportFileName)
        res.setHeader('Access-Control-Expose-Headers', 'File-Name')
        res.download(reportPath, reportFileName)
    } catch (err: any) {
        next(err)
    }
})

export default {
    index,
    exportExcel
}