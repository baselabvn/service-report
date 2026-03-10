const en = {
    DEVICE_ID_EMPTY: 'Device can not be empty',
    DEVICE_ID_NOT_STRING: 'Device ID must be a string',

    FROM_DATE_EMPTY: 'From date can not be empty',
    FROM_DATE_NOT_STRING: 'From date must be a string',

    TO_DATE_EMPTY: 'To date can not be empty',
    TO_DATE_NOT_STRING: 'To date must be a string'
}

const vi = {
    DEVICE_ID_EMPTY: 'Thiết bị không được để trống',
    DEVICE_ID_NOT_STRING: 'ID thiết bị phải là một chuỗi ký tự',

    FROM_DATE_EMPTY: 'Ngày bắt đầu không được để trống',
    FROM_DATE_NOT_STRING: 'Ngày bắt đầu phải là một chuỗi ký tự',

    TO_DATE_EMPTY: 'Ngày kết thúc không được để trống',
    TO_DATE_NOT_STRING: 'Ngày kết thúc phải là một chuỗi ký tự' 
}

export type ElectricMessage = typeof en

export default {
    en,
    vi
}