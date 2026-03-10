import path from 'path'

export const DATE_TIME_MS_FORMAT = 'YYYY-MM-DD HH:mm:ss.SSS'
export const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'
export const DATE_ONLY_FORMAT = 'YYYY-MM-DD'
export const TIME_ONLY_FORMAT = 'HH:mm:ss'
export const YEAR_MONTH_FORMAT = 'YYYY-MM'
export const TIME_ZONE = 'Asia/Ho_Chi_Minh'

export const PATH = Object.freeze({
    CACHE: path.join(global.dirname, '/cache'),
    LOG: path.join(global.dirname, '/logs'),
    STORAGE: path.join(global.dirname, '/storage')
})

export default {
    DATE_TIME_MS_FORMAT,
    DATE_TIME_FORMAT,
    DATE_ONLY_FORMAT,
    TIME_ONLY_FORMAT,
    YEAR_MONTH_FORMAT,
    TIME_ZONE,
    PATH
}