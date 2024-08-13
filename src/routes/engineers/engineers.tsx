import { TableHeader } from '@components/TableHeader'
import { TableWrapper } from '@components/TableWrapper/TableWrapper'
import { EngineerRow } from '@features/engineers/components/EngineerRow'
import { useQueryEngineers } from '@features/shared/hooks/useQueryEngineers'
import { Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material'

export const EngineersRoute = () => {
  const { data } = useQueryEngineers()

  return (
    <>
      <TableHeader
        sx={{ marginTop: '8px' }}
      >
        Инженеры
      </TableHeader>
      <TableWrapper>
        <Table
          sx={{ minHeight: 200 }}
          size={'small'}
        >
          <TableHead>
            <TableRow>
              <TableCell
                size={'small'}
              >
                Инженеры СО
                <TableSortLabel
                  direction={'desc'}
                  active
                />
              </TableCell>
              <TableCell
                size={'small'}
              >
                Заявки
                <TableSortLabel
                  direction={'desc'}
                  active
                />
              </TableCell>
              <TableCell
                size={'small'}
              >
                Статус
                <TableSortLabel
                  direction={'desc'}
                  active
                />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((engineer, index) => (
              <EngineerRow
                key={index}
                data={engineer}
              />
            ))}
          </TableBody>
        </Table>
      </TableWrapper>
    </>
  )
}
