import { useMemo } from 'react'
import { FieldAutocomplete } from '@components/Field'
import { EMPTY_VALUE_DASH } from '@constants/index'
import { useBrands } from '@features/shared/hooks/useBrands'

interface FieldAutocompleteBrandProps {
  value: string
  onChange: (value: string) => void
}

export const FieldAutocompleteBrand = ({ value, onChange }: FieldAutocompleteBrandProps) => {
  const { data: brands, isFetching } = useBrands()

  const fieldValue = useMemo(() => brands.find(({ name }) => name === value)?.name ? ({
    value: brands.find(({ name }) => name === value)!.name || EMPTY_VALUE_DASH,
    label: brands.find(({ name }) => name === value)!.name || EMPTY_VALUE_DASH,
  }) : null, [brands, value])

  const options = useMemo(() => brands.map((brand) => ({
    value: brand.name ?? EMPTY_VALUE_DASH,
    label: brand.name ?? EMPTY_VALUE_DASH,
  })), [brands])

  return (
    <FieldAutocomplete
      name={'region'}
      label={'Бренд техники'}
      placeholder={'Выберите бренд техники'}
      value={fieldValue}
      options={options}
      isLoading={isFetching}
      onChange={(data) => onChange(data?.label ?? '')}
    />
  )
}
