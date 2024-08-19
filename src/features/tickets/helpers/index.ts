import { FieldAutocompleteCommonValue } from '@components/Field/components/FieldAutocomplete/types'
import { StatusEnumLabel, TicketAvailableStatusesByStatus } from '@features/tickets/data'
import { TicketsPageFilters } from '@features/tickets/types'
import { StatusEnum } from '~/api/servicepro.generated'

export const getAvailableStatusOptions = (status: StatusEnum): FieldAutocompleteCommonValue[] => {
  return TicketAvailableStatusesByStatus[status].map((value) => ({
    value,
    label: StatusEnumLabel[value],
  }))
}

export const getTicketsPageFiltersDefault = (): TicketsPageFilters => ({
  search: '',
  region: '',
  district: '',
  brand: '',
  model: '',
  equipment: '',
  status: [],
})
