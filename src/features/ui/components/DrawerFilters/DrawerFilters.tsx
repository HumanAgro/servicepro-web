import { PropsWithChildren } from 'react'
import { DrawerContent } from '@components/DrawerContent'
import { Box, Button, Drawer } from '@mui/material'

interface DrawerFiltersProps {
  open: boolean
  onClose: () => void
}

export const DrawerFilters = ({ open, onClose, children }: PropsWithChildren<DrawerFiltersProps>) => {
  return (
    <Drawer
      open={open}
      anchor={'right'}
      disableScrollLock
      onClose={onClose}
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
            onClick={onClose}
          >
            Закрыть
          </Button>
        )}
        onClose={onClose}
      >
        <Box
          sx={{
            display: 'grid',
            alignItems: 'start',
            gap: '16px',
          }}
        >
          {children}
        </Box>
      </DrawerContent>
    </Drawer>
  )
}
