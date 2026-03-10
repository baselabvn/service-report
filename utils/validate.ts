import { isString, isNumber, isNull, isUndefined } from './checkType'
import { Message } from '#messages/index'

type valueType = 'string' | 'number'
type MessageType = Message[keyof Message]

const checkTypeMap: Record<valueType, (value: any) => boolean> = {
    string: isString,
    number: isNumber
}

const validate = (message: MessageType) => {
    
}

export default validate