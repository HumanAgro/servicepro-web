import { forwardRef, PropsWithChildren, ReactNode, Ref } from 'react'
import { DrawerHeader } from '@components/DrawerHeader'
import { DrawerFooter } from '@features/ui/components/DrawerFooter'
import { Box, SxProps } from '@mui/material'

interface DrawerContentProps {
  title: string
  sx?: SxProps
  innerSx?: SxProps
  renderFooter?: ReactNode
  onClose: () => void
}

export const DrawerContent = forwardRef(({ title, sx, innerSx, renderFooter, onClose, children }: PropsWithChildren<DrawerContentProps>, ref: Ref<HTMLDivElement>) => {
  return (
    <Box
      ref={ref}
      sx={{
        flexGrow: 1,
        display: 'grid',
        gridTemplateRows: 'min-content 1fr max-content',
        padding: '0',
        height: '100vh',
        minWidth: '550px',
        ...(sx ?? {}),
      }}
    >
      <DrawerHeader
        title={title}
        onClose={onClose}
      />
      <Box
        sx={{
          padding: '20px 16px',
          overflow: 'hidden',
          ...(innerSx ?? {}),
        }}
      >
        {children}
      </Box>
      {renderFooter && (
        <DrawerFooter>
          {renderFooter}
        </DrawerFooter>
      )}
    </Box>
  )
})
