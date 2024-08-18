import { FieldAutocompleteCommonValue } from '@components/Field/components/FieldAutocomplete/types'
import { StatusEnumLabel, TicketAvailableStatusesByStatus } from '@features/tickets/data'
import { StatusEnum } from '~/api/servicepro.generated'

export const getAvailableStatusOptions = (status: StatusEnum): FieldAutocompleteCommonValue[] => {
  return TicketAvailableStatusesByStatus[status].map((value) => ({
    value,
    label: StatusEnumLabel[value],
  }))
}

export const getStatusOptions = (): FieldAutocompleteCommonValue[] => {
  return Object.values(StatusEnum).filter((status) => ![StatusEnum.Search, StatusEnum.Processing, StatusEnum.Wait].some((s) => s === status)).map((status) => ({
    value: status,
    label: StatusEnumLabel[status],
  }))
}
