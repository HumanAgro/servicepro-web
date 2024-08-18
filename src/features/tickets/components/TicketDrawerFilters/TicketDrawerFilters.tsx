import { useEffect, useState } from 'react'
import { DrawerContent } from '@components/DrawerContent'
import { FieldAutocomplete, FieldInput } from '@components/Field'
import { StatusEnumLabel } from '@features/tickets/data'
import { getStatusOptions } from '@features/tickets/helpers'
import { TicketsPageFilters } from '@features/tickets/types'
import { Box, Drawer } from '@mui/material'
import { clone } from 'ramda'
import { StatusEnum } from '~/api/servicepro.generated'

interface TicketDrawerFiltersProps {
  open: boolean
  filters: TicketsPageFilters
  onClose: () => void
  onChange: (filters: Partial<TicketsPageFilters>) => void
}

export const TicketDrawerFilters = ({ open, filters: filtersProp, onClose, onChange }: TicketDrawerFiltersProps) => {
  const [filters, setFilters] = useState(clone(filtersProp))

  useEffect(() => {
    if (open) {
      setFilters(clone(filtersProp))
    }
  }, [open])

  const handleChange = (value: Partial<TicketsPageFilters>) => {
    setFilters((prev) => ({ ...prev, ...value }))
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
          <FieldAutocomplete
            name={'status'}
            label={'Статус заявки'}
            value={filters.status ? {
              value: filters.status,
              label: StatusEnumLabel[filters.status],
            } : null}
            options={getStatusOptions()}
            onChange={(data) => handleChange({ status: data?.value as StatusEnum ?? null })}
          />
        </Box>
      </DrawerContent>
    </Drawer>
  )
}
