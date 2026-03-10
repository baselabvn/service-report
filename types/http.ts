export type Meta = {
    currentPage: number
    lastPage: number
    total: number
    limit: number
    prevCursor: string | null
    nextCursor: string | null
}

export type SuccessResponse<T> = {
    success: true
    message: string
    data: T
    meta?: Meta
}

export type ErrorResponse = {
    success: false
    message: string
    errors: Record<string, string>
}