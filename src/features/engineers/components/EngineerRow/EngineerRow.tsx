import { useMemo, useState } from 'react'
import { EMPTY_VALUE_DASH } from '@constants/index'
import { EngineerAvatar } from '@features/engineers/components/EngineerAvatar'
import { DialogTicketAssign } from '@features/shared/components/DialogTicketAssign'
import { TableCellTickets } from '@features/shared/components/TableCellTickets'
import { TicketChipStatus } from '@features/shared/components/TicketChipStatus/TicketChipStatus'
import { useEmployeeRating } from '@features/shared/hooks/useEmployeeRating'
import { TableCell, TableRow } from '@mui/material'
import { WorkEmployee } from '~/api/servicepro.generated'

export interface EngineerRow {
  data: WorkEmployee
}

export const EngineerRow = ({ data }: EngineerRow) => {
  const { rating } = useEmployeeRating(data.id)
  const [open, setOpen] = useState(false)
  const [selectedTaskID, setSelectedTaskID] = useState<number | null>(data.tasks?.[0]?.id ?? null)
  const selectedTask = useMemo(() => data.tasks.find(({ id }) => id === selectedTaskID) ?? null, [selectedTaskID, data.tasks])

  return (
    <TableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell>
        <EngineerAvatar
          profile={data.profile}
          rating={rating}
        />
      </TableCell>
      <TableCell>
        <TableCellTickets
          selectedTaskID={selectedTaskID ?? null}
          tasks={data.tasks}
          width={'400px'}
          onClickAssign={() => setOpen(true)}
          onChangeSelectedTaskID={setSelectedTaskID}
        />
      </TableCell>
      <TableCell>
        {selectedTask ? (
          <TicketChipStatus
            status={selectedTask.status}
          />
        ) : EMPTY_VALUE_DASH}
      </TableCell>
      <DialogTicketAssign
        open={open}
        engineer={data}
        onClose={() => setOpen(false)}
        onSelectTaskID={setSelectedTaskID}
      />
    </TableRow>
  )
}
