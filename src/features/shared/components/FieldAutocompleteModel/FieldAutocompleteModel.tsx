import { useMemo } from 'react'
import { FieldAutocomplete } from '@components/Field'
import { EMPTY_VALUE_DASH } from '@constants/index'
import { useModels } from '@features/shared/hooks/useModels'

interface FieldAutocompleteModelProps {
  value: string
  brand?: string
  onChange: (value: string) => void
}

export const FieldAutocompleteModel = ({ value, brand, onChange }: FieldAutocompleteModelProps) => {
  const { data: models, isFetching } = useModels(brand)

  const fieldValue = useMemo(() => models.find(({ name }) => name === value)?.name ? ({
    value: models.find(({ name }) => name === value)!.name || EMPTY_VALUE_DASH,
    label: models.find(({ name }) => name === value)!.name || EMPTY_VALUE_DASH,
  }) : null, [models, value])

  const options = useMemo(() => models.map((model) => ({
    value: model.name ?? EMPTY_VALUE_DASH,
    label: model.name ?? EMPTY_VALUE_DASH,
  })), [models])

  return (
    <FieldAutocomplete
      name={'region'}
      label={'Модель'}
      placeholder={'Выберите модель'}
      value={fieldValue}
      options={options}
      isLoading={isFetching}
      onChange={(data) => onChange(data?.label ?? '')}
    />
  )
}
