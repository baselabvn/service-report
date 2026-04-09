import axios from 'axios'
import { SuccessResponse, ErrorResponse } from '#types/http'

const { IOT_GATEWAY } = process.env

type ElectricReportData = {
    date: string
    highslotconsump: number
    lowslotconsump: number
    mediumslotconsump: number
    powerconsump: number
    reactconsump: number
}

type ResponseReportData = {
    data: ElectricReportData[]
    highslotconsump: number
    lowslotconsump: number
    mediumslotconsump: number
    powerconsump: number
    reactconsump: number
}

export const getElectricReport = async (projectId: string, id: string | undefined, from: string, to: string): Promise<SuccessResponse<ResponseReportData> | ErrorResponse> => {
    try {
        const response = await axios.post(
            `${IOT_GATEWAY}/api/Electric/Report`,
            {
                from,
                to
            },
            {
                headers: {
                    projectid: projectId
                },
                params: {
                    id
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