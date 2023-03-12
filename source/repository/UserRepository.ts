import { Repository } from "./Repository";
import app from '../config/app'

export interface IUser {
  accessLevel: string
  areaOfIntrest: string
  corp: string
  corpEmail: string
  email: string
  id?: number
  name: string
  lastName: string
  partOf: boolean
  phone: string
  role: string
  institution: string
}
 
const UserRepository = new Repository<IUser>({ app, path: '/user' })


export default UserRepository