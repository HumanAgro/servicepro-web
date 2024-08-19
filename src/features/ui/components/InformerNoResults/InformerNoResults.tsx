import { ReactNode } from 'react'
import { Box, SxProps, Typography } from '@mui/material'

interface InformerNoResultsProps {
  title: string
  subtitle: string
  filtered?: boolean
  actions?: ReactNode
  sx?: SxProps
}

export const InformerNoResults = ({ title, subtitle, filtered = false, actions, sx }: InformerNoResultsProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '4px',
        width: '100%',
        height: '400px',
        textAlign: 'center',
        borderRadius: 2,
        background: (theme) => theme.palette.grey['200'],
        ...(sx ?? {}),
      }}
    >
      <Typography
        variant={'h5'}
      >
        {title}
      </Typography>
      <Typography
        variant={'body1'}
        fontWeight={400}
        sx={{ color: (theme) => theme.palette.grey['700'] }}
      >
        {filtered ? 'Попробуйте изменить или очистить параметры поиска' : subtitle}
      </Typography>
      {actions && filtered && (
        <Box
          sx={{
            display: 'flex',
            gap: '12px',
            marginTop: '12px',
          }}
        >
          {actions}
        </Box>
      )}
    </Box>
  )
}
