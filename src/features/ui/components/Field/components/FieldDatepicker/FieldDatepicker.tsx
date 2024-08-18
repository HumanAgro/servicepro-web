import { forwardRef, Ref } from 'react'
import { useTranslation } from 'react-i18next'
import { FieldCommonProps } from '@components/Field/types'
import { TextFieldProps } from '@mui/material'
import { DatePickerProps, DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { languages } from '~/i18n'

export interface FieldDatepickerProps extends
  FieldCommonProps,
  Pick<DatePickerProps<Date>, 'value' | 'disableFuture' | 'disablePast' | 'maxDate' | 'minDate' | 'shouldDisableDate' | 'onChange'>
{
  disabled?: boolean
  placeholder?: string
  onBlur?: TextFieldProps['onBlur']
}

export const FieldDatepicker = forwardRef(({
  value,
  label,
  disableFuture,
  disablePast,
  shouldDisableDate,
  maxDate,
  minDate,
  error,
  disabled,
  placeholder,
  onChange,
}: FieldDatepickerProps, ref: Ref<HTMLInputElement>) => {
  const { i18n } = useTranslation()

  return (
    <LocalizationProvider
      dateAdapter={AdapterDateFns}
      adapterLocale={languages.find(({ id }) => id === i18n.language)?.dateFnsLocale}
    >
      <DesktopDatePicker
        inputRef={ref}
        value={value}
        disableFuture={disableFuture}
        disablePast={disablePast}
        maxDate={maxDate}
        minDate={minDate}
        disabled={disabled}
        shouldDisableDate={shouldDisableDate}
        label={label}
        slotProps={{
          textField: {
            size: 'small',
            error,
            placeholder: placeholder ?? 'Не выбрано',
          },
        }}
        onChange={onChange}
      />
    </LocalizationProvider>
  )
})
