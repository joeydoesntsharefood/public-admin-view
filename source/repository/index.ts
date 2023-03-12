import { IBaseResponse } from "../types";

export interface IBaseConsumers<T> {
  create(data: T): Promise<IBaseResponse<T>>
  edit(data: T, id: string): Promise<IBaseResponse<T>>
  delete(id: string): Promise<IBaseResponse<T>>
  index(id: string): Promise<IBaseResponse<T>>
  list(): Promise<IBaseResponse<Array<T>>>
}