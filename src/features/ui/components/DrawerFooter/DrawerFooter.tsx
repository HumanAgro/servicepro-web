import { PropsWithChildren } from 'react'
import { Box } from '@mui/material'

interface DrawerFooterProps extends PropsWithChildren {}

export const DrawerFooter = ({ children }: DrawerFooterProps) => {
  return (
    <Box
      sx={{
        position: 'relative',
        boxShadow: 2,
        zIndex: 10,
        display: 'flex',
        gap: '8px',
        padding: '16px',
      }}
    >
      {children}
    </Box>
  )
}
