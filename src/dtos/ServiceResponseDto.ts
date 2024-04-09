export interface ServiceResponseDto<T> {
    data?: T,
    message?: string,
    status?: number,
    time?: string
}