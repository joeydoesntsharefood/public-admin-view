import { Repository } from "./Repository";
import app from '../config/app'

export interface IScheduling {
  ownerId: number
  isEventOpen: boolean
  hostId: number
  eventName: string
  chain: string
  placeId?: number
  placeName: string
  startAt: string
  endAt: string
  invitesId: Array<Number>
}

const ScheduleRepository = new Repository<IScheduling>({ app, path: '/auth/schedule' })

export default ScheduleRepository