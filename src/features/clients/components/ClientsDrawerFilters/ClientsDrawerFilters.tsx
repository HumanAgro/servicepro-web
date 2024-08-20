import { DrawerFilters } from '@components/DrawerFilters'
import { FieldInput } from '@components/Field'
import { ClientsPageFilters } from '@features/clients/types'
import { FieldAutocompleteRegion } from '@features/shared/components/FieldAutocompleteRegion'

interface ClientsDrawerFiltersProps {
  open: boolean
  filters: ClientsPageFilters
  onClose: () => void
  onChange: (filters: Partial<ClientsPageFilters>) => void
}

export const ClientsDrawerFilters = ({ open, filters, onClose, onChange }: ClientsDrawerFiltersProps) => {
  const handleChange = (value: Partial<ClientsPageFilters>) => {
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
    </DrawerFilters>
  )
}
