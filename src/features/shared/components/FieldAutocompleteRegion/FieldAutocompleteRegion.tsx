import { FieldAutocomplete } from '@components/Field'
import { EMPTY_VALUE_DASH } from '@constants/index'
import { useRegions } from '@features/shared/hooks/useRegions'

interface FieldAutocompleteRegionProps {
  value: string
  onChange: (value: string) => void
}

export const FieldAutocompleteRegion = ({ value, onChange }: FieldAutocompleteRegionProps) => {
  const { data: regions } = useRegions()

  return (
    <FieldAutocomplete
      name={'region'}
      label={'Регион'}
      placeholder={'Выберите регион'}
      value={regions.find(({ local_name }) => local_name === value)?.local_name ? ({
        value: regions.find(({ local_name }) => local_name === value)!.local_code || EMPTY_VALUE_DASH,
        label: regions.find(({ local_name }) => local_name === value)!.local_name || EMPTY_VALUE_DASH,
      }) : null}
      options={regions.map((region) => ({
        value: region.local_code ?? EMPTY_VALUE_DASH,
        label: region.local_name ?? EMPTY_VALUE_DASH,
      }))}
      onChange={(data) => onChange(data?.label ?? '')}
    />
  )
}
