import { IDate } from "@/source/views/URLs/mockdata"

export interface ISchedule {
  chain: string
  startAt: IDate
  endAt: IDate
  eventName: string
  hostId: number
  invitesId: Array<number>
  isEventOpen: boolean
  ownerId: number
  placeName: string
}