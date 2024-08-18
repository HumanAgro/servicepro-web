import { PropsWithChildren, ReactNode } from 'react'
import { ButtonIconSquare } from '@components/ButtonIconSquare'
import { FilterAltTwoTone } from '@mui/icons-material'
import { Badge, Box, SxProps, Typography } from '@mui/material'

export interface TableHeaderProps {
  amount?: number
  sx?: SxProps
  renderSearch?: ReactNode
  onFilterClick?: () => void
}

export const TableHeader = ({ amount, sx = {}, onFilterClick, renderSearch, children }: PropsWithChildren<TableHeaderProps>) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        width: '100%',
        ...sx,
      }}
    >
      {typeof amount === 'number' ? (
        <Badge
          color={'primary'}
          badgeContent={amount}
          overlap={'rectangular'}
          sx={{
            marginRight: 'auto',
            '& > .MuiBadge-badge': {
              top: '4px',
              right: '-4px',
            },
          }}
        >
          <Typography
            variant={'h5'}
          >
            {children}
          </Typography>
        </Badge>
      ) : (
        <Typography
          variant={'h5'}
          sx={{
            marginRight: 'auto',
          }}
        >
          {children}
        </Typography>
      )}
      {renderSearch}
      {onFilterClick && (
        <Badge
          variant={'dot'}
          color={'info'}
          overlap={'rectangular'}
          sx={{
            '& > .MuiBadge-badge': {
              height: '12px',
              width: '12px',
              borderRadius: '6px',
            },
          }}
        >
          <ButtonIconSquare
            onClick={onFilterClick}
          >
            <FilterAltTwoTone fontSize={'medium'} />
          </ButtonIconSquare>
        </Badge>
      )}
    </Box>
  )
}
