export interface IBaseResponse<T = any> {
  message: string
  success: boolean
  data?: T
}