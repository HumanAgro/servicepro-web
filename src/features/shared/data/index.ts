import { ReadyState } from 'react-use-websocket'
import { RoleEnum } from '~/api/servicepro.generated'

export enum QueryKey {
  Clients = 'clients',
  Client = 'client',
  ClientVehicles = 'client-vehicles',
  ClientTickets = 'client-tickets',
  ClientEmployees = 'client-employees',
  Chats = 'chats',
  Engineers = 'engineers',
  Employee = 'employee',
  Ticket = 'ticket',
  TicketsGeos = 'tickets-geos',
  TicketsEngineers = 'tickets-engineers',
  TicketAttachments = 'ticket-attachments',
  TicketResult = 'ticket-result',
  TicketReviews = 'ticket-review',
  TicketStatuses = 'ticket-statuses',
  Vehicles = 'vehicles',
  Vehicle = 'vehicle',
  VehicleDocuments = 'vehicle-documents',
  VehicleNotes = 'vehicle-notes',
  VehicleRuntime = 'vehicle-runtime',
  VehicleRecommendations = 'vehicle-recommendations',
  VehicleTickets = 'vehicle-tickets',
  OrganizationEmployees = 'organization-employees',
  Profile = 'profile',
  RelatedOrgs = 'related-orgs',
  Regions = 'regions',
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
