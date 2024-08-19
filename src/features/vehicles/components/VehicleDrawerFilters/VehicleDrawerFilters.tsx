import { DrawerFilters } from '@components/DrawerFilters'
import { FieldInput } from '@components/Field'
import { FieldAutocompleteBrand } from '@features/shared/components/FieldAutocompleteBrand'
import { FieldAutocompleteEquipment } from '@features/shared/components/FieldAutocompleteEquipment'
import { FieldAutocompleteModel } from '@features/shared/components/FieldAutocompleteModel'
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
      <FieldAutocompleteBrand
        value={filters.brand}
        onChange={(brand) => handleChange({ brand })}
      />
      <FieldAutocompleteModel
        value={filters.model}
        brand={filters.brand}
        onChange={(model) => handleChange({ model })}
      />
      <FieldAutocompleteEquipment
        value={filters.equipment}
        onChange={(equipment) => handleChange({ equipment })}
      />
    </DrawerFilters>
  )
}
