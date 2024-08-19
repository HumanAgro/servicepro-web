import { DrawerFilters } from '@components/DrawerFilters'
import { FieldInput } from '@components/Field'
import { FieldAutocompleteRegion } from '@features/shared/components/FieldAutocompleteRegion'
import { VehiclesPageFilters } from '@features/vehicles/types'

interface VehicleDrawerFiltersProps {
  open: boolean
  filters: VehiclesPageFilters
  onClose: () => void
  onChange: (filters: Partial<VehiclesPageFilters>) => void
}

export const VehicleDrawerFilters = ({ open, filters, onClose, onChange }: VehicleDrawerFiltersProps) => {
  const handleChange = (value: Partial<VehiclesPageFilters>) => {
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
      <FieldInput
        value={filters.brand}
        name={'brand'}
        label={'Бренд техники'}
        placeholder={'Введите бренд техники'}
        onChange={(event) => handleChange({ brand: event.target.value })}
      />
      <FieldInput
        value={filters.model}
        name={'model'}
        label={'Модель техники'}
        placeholder={'Введите модель техники'}
        onChange={(event) => handleChange({ model: event.target.value })}
      />
    </DrawerFilters>
  )
}
