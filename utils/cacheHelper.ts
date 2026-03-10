import { writeFileSync, existsSync, readFileSync }from 'fs'
import crypto from 'crypto'

export const getCacheKey = (params: any) => {
    const hash = crypto.createHash('sha256')
    hash.update(params)
    return hash.digest('hex')
}

export const getExcel = (params: any, path: string) => {
    const fileName = `${getCacheKey(params)}.xlsx`
    return existsSync(`${path}/${fileName}`) ? fileName : null
}

export const hasRaw = (params: any, path: string) => {
    const fileName = `${getCacheKey(params)}.json`
    return existsSync(`${path}/${fileName}`)
}

export const getRaw = (params: any, path: string) => {
    const fileName = `${getCacheKey(params)}.json`
    return JSON.parse(readFileSync(`${path}/${fileName}`, 'utf8'))
}

export const setRaw = (params: any, path: string, data: any) => {
    const fileName = `${getCacheKey(params)}.json`
    writeFileSync(`${path}/${fileName}`, JSON.stringify(data))
}

export default { 
    getExcel,
    getCacheKey,
    hasRaw,
    getRaw,
    setRaw
}