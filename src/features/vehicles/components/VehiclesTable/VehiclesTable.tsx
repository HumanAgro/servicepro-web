import { TableWrapper } from '@components/TableWrapper/TableWrapper'
import { VehicleRow } from '@features/vehicles/components/VehicleRow'
import { SxProps, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { WorkVehicle } from '~/api/servicepro.generated'

interface VehiclesTableProps {
  data: WorkVehicle[]
  isSuccess: boolean
  sx?: SxProps
}

export const VehiclesTable = ({ data, isSuccess, sx }: VehiclesTableProps) => {
  return (
    <TableWrapper
      sx={sx}
    >
      <Table
        size={'small'}
      >
        <TableHead>
          <TableRow>
            <TableCell
              size={'small'}
            >
              Клиент
            </TableCell>
            <TableCell
              size={'small'}
            >
              Регион
            </TableCell>
            <TableCell
              size={'small'}
            >
              Район
            </TableCell>
            <TableCell
              size={'small'}
            >
              Бренд
            </TableCell>
            <TableCell
              size={'small'}
            >
              Модель
            </TableCell>
            <TableCell
              size={'small'}
            >
              Тип
            </TableCell>
            <TableCell
              size={'small'}
            >
              Заводской номер
            </TableCell>
            <TableCell
              size={'small'}
            >
              Наработка
            </TableCell>
            <TableCell
              size={'small'}
            >
              Заявки
            </TableCell>
            <TableCell
              size={'small'}
            >
              Инженер
            </TableCell>
            <TableCell
              size={'small'}
            />
          </TableRow>
        </TableHead>
        <TableBody>
          {isSuccess && (
            <>
              {data.map((vehicle) => (
                <VehicleRow
                  key={vehicle.id}
                  vehicle={vehicle}
                />
              ))}
            </>
          )}
        </TableBody>
      </Table>
    </TableWrapper>
  )
}
