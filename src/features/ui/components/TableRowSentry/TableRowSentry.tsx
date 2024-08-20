import { forwardRef, Ref } from 'react'
import { Box, CircularProgress, TableCell, TableRow } from '@mui/material'

interface TableRowSentryProps {
  colspan: number
}

export const TableRowSentry = forwardRef(({ colspan }: TableRowSentryProps, ref: Ref<HTMLTableRowElement>) => {
  return (
    <TableRow ref={ref}>
      <TableCell
        colSpan={colspan}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <CircularProgress
            color={'info'}
            size={24}
          />
        </Box>
      </TableCell>
    </TableRow>
  )
})
