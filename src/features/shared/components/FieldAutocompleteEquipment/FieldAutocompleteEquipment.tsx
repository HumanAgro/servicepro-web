import { useMemo } from 'react'
import { FieldAutocomplete } from '@components/Field'
import { EMPTY_VALUE_DASH } from '@constants/index'
import { useEquipment } from '@features/shared/hooks/useEquipment'

interface FieldAutocompleteEquipmentProps {
  value: string
  onChange: (value: string) => void
}

export const FieldAutocompleteEquipment = ({ value, onChange }: FieldAutocompleteEquipmentProps) => {
  const { data: equipment, isFetching } = useEquipment()

  const fieldValue = useMemo(() => equipment.find(({ name }) => name === value)?.name ? ({
    value: equipment.find(({ name }) => name === value)!.name || EMPTY_VALUE_DASH,
    label: equipment.find(({ name }) => name === value)!.name || EMPTY_VALUE_DASH,
  }) : null, [equipment, value])

  const options = useMemo(() => equipment.map((brand) => ({
    value: brand.name ?? EMPTY_VALUE_DASH,
    label: brand.name ?? EMPTY_VALUE_DASH,
  })), [equipment])

  return (
    <FieldAutocomplete
      name={'region'}
      label={'Тип техники'}
      placeholder={'Выберите тип техники'}
      value={fieldValue}
      options={options}
      isLoading={isFetching}
      onChange={(data) => onChange(data?.label ?? '')}
    />
  )
}
