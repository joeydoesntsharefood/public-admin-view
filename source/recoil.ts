import { atom } from 'recoil';

export interface IUser {
  accessLevel: string
	name: string
	phone: string
	areaOfIntrest: string
	partOf: boolean
	email: string
	corpEmail: string
	corp: string
	role: string
	rpmId: number
	instituition: string
	lastName: string
	occupation: string
}

export const defaultUserValue: IUser = {
  accessLevel: '',
  areaOfIntrest: '',
  corp: '',
  corpEmail: '',
  email: '',
  instituition: '',
  lastName: '',
  name: '',
  occupation: '',
  partOf: false,
  phone: '',
  role: '',
  rpmId: 0
}    

export const userState = atom<IUser>({
  key: 'userState',
  default: defaultUserValue,
})

export const tokenState = atom<string>({
  key: 'tokenState',
  default: ''
})