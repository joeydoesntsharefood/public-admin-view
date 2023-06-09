import { Repository } from "./Repository";
import app from '../config/app'

export interface IPainel {
  orderExp: number
  title: string
  uri: string
  painelId: number
  painelTitle: string
  id?: number
}

interface IPainelDBA {
  file: string
  folder: string
  orderExp: string
  domain: string
  title: string
}  

const PainelsRepository = new Repository<IPainel>({ app, path: '/auth/content' })

export const AddContentPainel = async (data: { contents: Array<IPainelDBA> }, id: string) => {
  try {
    const response = await app.post(`/auth/content/${id}/list`, data)
    return response?.data
  } catch (err: any) {
    return err
  }
}

export default PainelsRepository