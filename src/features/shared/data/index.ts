import { ReadyState } from 'react-use-websocket'
import { RoleEnum } from '~/api/servicepro.generated'

export enum QueryKey {
  TicketsGeos = 'tickets-geos',
  TicketsEngineers = 'tickets-engineers',
  Engineers = 'engineers',
  Clients = 'clients',
  Ticket = 'ticket',
  Chats = 'chats',
  Employee = 'employee',
}

export enum SearchParamsKey {
  TicketID = 'ticketID',
  PhotoSliderPhotoIndex = 'imageIndex',
}

export const RoleLabel: Record<RoleEnum, string> = {
  [RoleEnum.Client]: 'Клиент',
  [RoleEnum.Coordinator]: 'Координатор',
  [RoleEnum.Engineer]: 'Инженер',
  [RoleEnum.Server]: 'Система',
}

export const ConnectionStatus = {
  [ReadyState.CONNECTING]: 'Connecting',
  [ReadyState.OPEN]: 'Open',
  [ReadyState.CLOSING]: 'Closing',
  [ReadyState.CLOSED]: 'Closed',
  [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
}
