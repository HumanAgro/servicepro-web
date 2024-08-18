import { useCallback, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { EMPTY_VALUE_DASH } from '@constants/index'
import { TableCellTickets } from '@features/shared/components/TableCellTickets'
import { QueryKey } from '@features/shared/data'
import { useEmployment } from '@features/shared/hooks/useEmployment'
import { VehicleRecommendationsChips } from '@features/vehicles/components/VehicleRecommendationsChips'
import { useApi } from '@hooks/useApi'
import { useNotify } from '@hooks/useNotify'
import { useOrganizationID } from '@hooks/useOrganizationID'
import { TableCell, TableRow, Typography } from '@mui/material'
import { queryClient } from '~/api'
import { WorkOrganization } from '~/api/servicepro.generated'

export interface ClientRowProps {
  data: WorkOrganization
}

export const ClientRow = ({ data }: ClientRowProps) => {
  const navigate = useNavigate()
  const { organizationID } = useOrganizationID()
  const { notify } = useNotify()
  const { api } = useApi()
  const { employment } = useEmployment()
  const [selectedTaskID, setSelectedTaskID] = useState<number | null>(data.tasks?.[0]?.id ?? null)
  const selectedTask = useMemo(() => data.tasks.find(({ id }) => id === selectedTaskID) ?? null, [selectedTaskID, data.tasks])

  const handleChangeCoordinator = useCallback(async () => {
    if (!selectedTaskID || !employment?.profile.id) {
      notify({
        message: 'Произошла ошибка при попытка назначить вас координатором заявки',
        variant: 'error',
      })

      return
    }

    try {
      await api.workSersTasksExecutorsPartialUpdate(selectedTaskID, organizationID.toString(), {
        coordinator: employment.profile.id,
      })

      notify({
        message: `Вы назначены координатором заявки "${selectedTask?.title ?? 'Без названия'}"`,
        variant: 'success',
      })
    } catch (error) {
      notify({
        message: 'Произошла ошибка при попытка назначить вас координатором заявки',
        variant: 'error',
      })
    } finally {
      await queryClient.invalidateQueries({ queryKey: [QueryKey.Clients] })
    }
  }, [selectedTaskID, employment?.profile?.id, notify, api, organizationID, selectedTask?.title])

  const handleRowClick = useCallback(async () => {
    navigate(`/${organizationID}/clients/${data.id}`)
  }, [organizationID, data, navigate])

  return (
    <TableRow
      sx={{
        cursor: 'pointer',
        '&:last-child td, &:last-child th': { border: 0 },
      }}
      hover
      onClick={handleRowClick}
    >
      <TableCell>
        <Typography
          variant={'body2'}
        >
          {data.name}
        </Typography>
      </TableCell>
      <TableCell>
        {data.requisites?.physical_address?.region?.local_name || EMPTY_VALUE_DASH}
      </TableCell>
      <TableCell>
        {data.requisites?.physical_address?.district || EMPTY_VALUE_DASH}
      </TableCell>
      <TableCell
        onClick={(event) => event.stopPropagation()}
      >
        <TableCellTickets
          selectedTaskID={selectedTaskID}
          tasks={data.tasks}
          onChangeSelectedTaskID={setSelectedTaskID}
          onClickAccept={handleChangeCoordinator}
        />
      </TableCell>
      <TableCell
        align={'center'}
      >
        <VehicleRecommendationsChips
          count={{
            warning: data.summaries[0]?.r_warning_count ?? 0,
            critical: data.summaries[0]?.r_critical_count ?? 0,
            info: data.summaries[0]?.r_info_count ?? 0,
          }}
          sx={{ paddingLeft: '8px' }}
        />
      </TableCell>
    </TableRow>
  )
}
