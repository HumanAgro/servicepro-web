import { Fragment, PropsWithChildren } from 'react'
import { FilterChipData } from '@components/FiltersChips/types'
import { Box, Chip } from '@mui/material'

interface FiltersChipsProps {
  chips: FilterChipData[]
  filled: number
  onClear: () => void
}

export const FiltersChips = ({ chips, filled, onClear, children }: PropsWithChildren<FiltersChipsProps>) => {
  return (
    <>
      {filled > 0 && (
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginTop: '12px',
          }}
        >
          {chips.map((chip, index) => (
            <Fragment key={`${chip.value}-${index}`}>
              {chip.value && (
                <Chip
                  size={'small'}
                  label={`${chip.label ? `${chip.label}: ` : ''}"${chip.value}"`}
                  onDelete={chip.onDelete}
                />
              )}
            </Fragment>
          ))}
          {children}
          {filled > 1 && (
            <Chip
              variant={'outlined'}
              size={'small'}
              label={'Очистить всё'}
              onClick={onClear}
            />
          )}
        </Box>
      )}
    </>
  )
}
