import { FieldInput, FieldInputProps } from '@components/Field'
import { Search } from '@mui/icons-material'
import { InputAdornment } from '@mui/material'

interface FieldInputSearchProps extends Pick<FieldInputProps, 'value' | 'onChange'>{}

export const FieldInputSearch = ({ value, onChange }: FieldInputSearchProps) => {
  return (
    <FieldInput
      value={value}
      name={'search'}
      placeholder={'Поиск'}
      sx={{ width: '260px' }}
      autoComplete={'off'}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
      onChange={onChange}
    />
  )
}
