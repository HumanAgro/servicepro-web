import { PropsWithChildren } from 'react'
import { Box, Chip } from '@mui/material'

interface FiltersChipsProps {
  filled: number
  onClear: () => void
}

export const FiltersChips = ({ filled, onClear, children }: PropsWithChildren<FiltersChipsProps>) => {
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
