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
  status: [],
})

export const getTicketsPageFiltersFilledAmount = (filters: TicketsPageFilters): number => {
  const lists = Object.values(filters).filter((value) => Array.isArray(value))
  const values = Object.values(filters).filter((value) => !Array.isArray(value))

  return lists.filter((list) => list.length > 0).map((v) => v.length).reduce((acc, v) => acc + v, 0) + values.filter(Boolean).length
}
