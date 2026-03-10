const NUMBER: string = 'Number'
const FUNCTION: string = 'Function'
const ASYNCFUNCTION: string = 'AsyncFunction'
const NULL: string = 'Null'
const UNDEFINED: string = 'Undefined'
const STRING: string = 'String'
const BOOLEAN: string = 'Boolean'
const ARRAY: string = 'Array'
const OBJECT: string = 'Object'
const MAP: string = 'Map'

export const typeOf = (type: any): string => Object.prototype.toString.call(type).slice(8, -1)

export const isNumber = (type: any): type is number => typeOf(type) === NUMBER

export const isFunction = (type: any): type is Function => typeOf(type) === FUNCTION || typeOf(type) === ASYNCFUNCTION

export const isAsyncFunction = (type: any): type is Function => typeOf(type) === ASYNCFUNCTION

export const isNull = (type: any): type is null => typeOf(type) === NULL

export const isUndefined = (type: any): type is undefined => typeOf(type) === UNDEFINED

export const isString = (type: any): type is string => typeOf(type) === STRING

export const isBoolean = (type: any): type is boolean => typeOf(type) === BOOLEAN

export const isArray = (type: any): type is any[] => typeOf(type) === ARRAY

export const isObject = (type: any): type is Record<string, any> => typeOf(type) === OBJECT

export const isMap = (type: any): type is Map<any, any> => typeOf(type) === MAP

export const isStringArray = (type: any) => isArray(type) && type.every(i => isString(i))

export const createEnumCheck = <T extends string>(allowedValues: T[]): (type: any) => type is T => {
  return (type: any): type is T => {
    return allowedValues.includes(type as T)
  }
}

export default {
    typeOf,
    isNumber,
    isFunction,
    isAsyncFunction,
    isNull,
    isUndefined,
    isString,
    isBoolean,
    isArray,
    isObject,
    isMap,
    isStringArray,
    createEnumCheck
}