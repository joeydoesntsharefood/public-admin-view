export const scheduleData = [
  {
    id: 1,
    chain: 'café',
    startAt: {
      day: 3,
      month: 3,
      year: 2023,
      hour: 9,
      minute: 53,
      seconds: 20
    },
    endAt: {
      day: 3,
      month: 3,
      year: 2023,
      hour: 10,
      minute: 53,
      seconds: 20
    },
    eventName: 'Evento Teste 1',
    hostId: -1,
    invitesId: [
      1,
      2,
      3,
    ],
    isEventOpen: false,
    ownerId: 1,
    placeId: 1,
    placeName: 'Café'
  },
  {
    id: 2,
    chain: 'café',
    startAt: {
      day: 4,
      month: 3,
      year: 2023,
      hour: 9,
      minute: 53,
      seconds: 20
    },
    endAt: {
      day: 4,
      month: 3,
      year: 2023,
      hour: 10,
      minute: 53,
      seconds: 20
    },
    eventName: 'Evento Teste 2',
    hostId: -1,
    invitesId: [],
    isEventOpen: true,
    ownerId: 1,
    placeId: 1,
    placeName: 'Café'
  },
  {
    id: 3,
    chain: 'café',
    startAt: {
      day: 5,
      month: 3,
      year: 2023,
      hour: 9,
      minute: 53,
      seconds: 20
    },
    endAt: {
      day: 5,
      month: 3,
      year: 2023,
      hour: 10,
      minute: 53,
      seconds: 20
    },
    eventName: 'Evento Teste 3',
    hostId: -1,
    invitesId: [
      2
    ],
    isEventOpen: false,
    ownerId: 1,
    placeId: 1,
    placeName: 'Café'
  }
]

export interface IDate {
  day: number
  month: number
  year: number
  hour: number
  minute: number
  seconds: number
}