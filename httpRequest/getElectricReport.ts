import axios from 'axios'
import { SuccessResponse, ErrorResponse } from '#types/http'

const { IOT_GATEWAY } = process.env

export const getElectricReport = async (projectId: string, id: string, from: string, to: string): Promise<SuccessResponse<any> | ErrorResponse> => {
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