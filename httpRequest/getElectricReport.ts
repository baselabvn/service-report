import axios from 'axios'
import { SuccessResponse, ErrorResponse } from '#types/http'

const { IOT_GATEWAY } = process.env

type ElectricReportData = {
    date: string
    highSlotConsump: number
    lowSlotConsump: number
    mediumSlotConsump: number
    powerConsump: number
    reactConsump: number
}

type ResponseReportData = {
    data: ElectricReportData[]
    highSlotConsump: number
    lowSlotConsump: number
    mediumSlotConsump: number
    powerConsump: number
    reactConsump: number
}

export const getElectricReport = async (projectId: string, id: string, from: string, to: string): Promise<SuccessResponse<ResponseReportData> | ErrorResponse> => {
    try {
        const response = await axios.post(
            `${IOT_GATEWAY}/api/Electric/Report/${id}`,
            {
                from,
                to
            },
            {
                headers: {
                    projectid: projectId
                }
            }
        )
        
        return {
            success: true,
            message: 'success',
            data: response.data.data
        }
    } catch (error: any) {
        return {
            success: false,
            message: error.message,
            errors: {}
        }
    }
}

export default {
    getElectricReport
}