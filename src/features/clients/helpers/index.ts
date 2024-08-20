import { ClientsPageFilters } from '@features/clients/types'

export const getClientsPageFiltersDefault = (): ClientsPageFilters => ({
  search: '',
  region: '',
  district: '',
})
