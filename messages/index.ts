import { Lang } from '#types/common'
import commonMessage, { CommonMessage } from './common.message'
import electricMessage, { ElectricMessage } from './electric.message'

export type Message = {
    common: CommonMessage
    electric: ElectricMessage
}

export const translate = (lang: Lang = 'en'): Message => {
    return {
        common: commonMessage[lang] ?? commonMessage.en,
        electric: electricMessage[lang] ?? electricMessage.en,
    } as Message
}

export default {
    translate
}