import { IBaseConsumers } from "."
import { IBaseResponse } from "../types"
import { AxiosInstance } from 'axios'

export class Repository<T> implements IBaseConsumers<T> {
  async create(data: T): Promise<IBaseResponse<T>> {
    try {
      const response = await this.app.post(this.path, data)
      return response.data
    } catch (err: any) {
      return err
    }
  } 

  async edit(data: T, id: string): Promise<IBaseResponse<T>> {
    try {
      const response = await this.app.post(`${this.path}/${id}`, data)
      return response.data
    } catch (err: any) {
      return err
    }
  }

  async index(id: string): Promise<IBaseResponse<T>> {
    try {
      const response = await this.app.get(`${this.path}/${id}`)
      return response.data
    } catch (err: any) {
      return err
    }
  }

  async list(search?: string): Promise<IBaseResponse<Array<T>>> {
    try {
      const response = await this.app.get(search ? `${this.path}?search=${search}` : this.path)
      return response.data
    } catch (err: any) {
      return err
    }
  }

  async delete(id: string): Promise<IBaseResponse<T>> {
    try {
      const response = await this.app.post(`${this.path}/${id}/delete`)
      return response.data
    } catch (err: any) {
      return err
    }
  }

  public app: AxiosInstance
  public path: string
  
  constructor ({ app, path }: { app: AxiosInstance, path: string }) {
    this.app = app
    this.path = path
  }
}