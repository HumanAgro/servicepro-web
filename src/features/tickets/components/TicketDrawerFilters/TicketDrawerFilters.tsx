import { DrawerFilters } from '@components/DrawerFilters'
import { FieldAutocompleteMultiple, FieldInput } from '@components/Field'
import { FieldAutocompleteBrand } from '@features/shared/components/FieldAutocompleteBrand'
import { FieldAutocompleteModel } from '@features/shared/components/FieldAutocompleteModel'
import { FieldAutocompleteRegion } from '@features/shared/components/FieldAutocompleteRegion'
import { StatusEnumLabel, TicketsStatusOptions } from '@features/tickets/data'
import { TicketsPageFilters } from '@features/tickets/types'
import { StatusEnum } from '~/api/servicepro.generated'

interface TicketDrawerFiltersProps {
  open: boolean
  filters: TicketsPageFilters
  onClose: () => void
  onChange: (filters: Partial<TicketsPageFilters>) => void
}

export const TicketDrawerFilters = ({ open, filters, onClose, onChange }: TicketDrawerFiltersProps) => {
  const handleChange = (value: Partial<TicketsPageFilters>) => {
    onChange(value)
  }

  const handleClose = () => {
    onClose()
  }

  return (
    <DrawerFilters
      open={open}
      onClose={handleClose}
    >
      <FieldAutocompleteRegion
        value={filters.region}
        onChange={(region) => handleChange({ region })}
      />
      <FieldInput
        value={filters.district}
        name={'district'}
        label={'Район'}
        placeholder={'Введите район'}
        onChange={(event) => handleChange({ district: event.target.value })}
      />
      <FieldAutocompleteBrand
        value={filters.brand}
        onChange={(brand) => handleChange({ brand })}
      />
      <FieldAutocompleteModel
        value={filters.model}
        brand={filters.brand}
        onChange={(model) => handleChange({ model })}
      />
      <FieldAutocompleteMultiple
        name={'status'}
        label={'Статус заявки'}
        value={filters.status.map((status) => ({ value: status, label: StatusEnumLabel[status] }))}
        options={TicketsStatusOptions}
        onChange={(data) => handleChange({ status: data.map(({ value }) => value as StatusEnum) })}
      />
    </DrawerFilters>
  )
}
