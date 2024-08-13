import { ReactNode } from 'react'
import { Box, Typography, TypographyVariant } from '@mui/material'

interface FieldLabelValueProps {
  label: ReactNode | string
  value: ReactNode | string
  variant?: TypographyVariant
  column?: boolean
}

export const FieldLabelValue = ({ label, value, variant = 'body1', column }: FieldLabelValueProps) => {
  return (
    <Box
      sx={{
        display: 'grid',
        ...(column ? {} : {
          gap: '16px',
          gridTemplateColumns: '300px 1fr',
        }),
      }}
    >
      <Typography
        variant={variant}
        sx={{ color: (theme) => theme.palette.grey['700'] }}
      >
        {label}:
      </Typography>
      <Typography
        variant={variant}
      >
        {value}
      </Typography>
    </Box>
  )
}
