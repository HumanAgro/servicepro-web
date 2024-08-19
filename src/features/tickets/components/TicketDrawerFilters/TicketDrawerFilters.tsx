import { DrawerContent } from '@components/DrawerContent'
import { FieldAutocompleteMultiple, FieldInput } from '@components/Field'
import { StatusEnumLabel, TicketsStatusOptions } from '@features/tickets/data'
import { TicketsPageFilters } from '@features/tickets/types'
import { Box, Button, Drawer } from '@mui/material'
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
    <Drawer
      open={open}
      anchor={'right'}
      disableScrollLock
      hideBackdrop
      onClose={handleClose}
    >
      <DrawerContent
        title={'Фильтры'}
        sx={{
          width: '450px',
          minWidth: '450px',
        }}
        renderFooter={(
          <Button
            variant={'outlined'}
            color={'info'}
            disableElevation
            onClick={handleClose}
          >
            Закрыть
          </Button>
        )}
        onClose={handleClose}
      >
        <Box
          sx={{
            display: 'grid',
            alignItems: 'start',
            gap: '16px',
          }}
        >
          <FieldInput
            value={filters.region}
            name={'region'}
            label={'Регион'}
            placeholder={'Введите регион'}
            onChange={(event) => handleChange({ region: event.target.value })}
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
          <FieldAutocompleteMultiple
            name={'status'}
            label={'Статус заявки'}
            value={filters.status.map((status) => ({ value: status, label: StatusEnumLabel[status] }))}
            options={TicketsStatusOptions}
            onChange={(data) => handleChange({ status: data.map(({ value }) => value as StatusEnum) })}
          />
        </Box>
      </DrawerContent>
    </Drawer>
  )
}
