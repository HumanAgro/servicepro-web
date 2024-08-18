import { useCallback, useRef, useState } from 'react'
import { FieldInputSearch } from '@components/FieldInputSearch'
import { TableHeader } from '@components/TableHeader'
import { MAP_FLY_DURATION, PAGINATION_DEFAULT_LIMIT } from '@constants/index'
import { QueryKey } from '@features/shared/data'
import { getGeoInfoBounds } from '@features/shared/helpers'
import { Map, MapRef } from '@features/tickets/components/Map'
import { TicketDrawerFilters } from '@features/tickets/components/TicketDrawerFilters'
import { TicketsTable } from '@features/tickets/components/TicketsTable'
import { StatusEnumLabel } from '@features/tickets/data'
import { TaskVerbose, TicketsPageFilters } from '@features/tickets/types'
import { useApi } from '@hooks/useApi'
import { useOrganizationID } from '@hooks/useOrganizationID'
import { Box, Chip, Container } from '@mui/material'
import { useDebounceCallback } from '@react-hook/debounce'
import { useQuery } from '@tanstack/react-query'
import { WorkSersTasksVerboseListParams, WorkTaskGeo } from '~/api/servicepro.generated'
import { useMapStore } from '~/store/useMapStore'

export const TicketsRoute = () => {
  const { organizationID } = useOrganizationID()
  const { api } = useApi()
  const updateTime = useMapStore((state) => state.updateTime)
  const setUpdatedTime = useMapStore((state) => state.setUpdatedTime)

  const mapRef = useRef<MapRef | null>(null)

  const [filtersOpen, setFiltersOpen] = useState(false)
  const [count, setCount] = useState(0)
  const [page, setPage] = useState(0)
  const [search, setSearch] = useState('')
  const [selectedTaskIndex, setSelectedTaskIndex] = useState<number | null>(null)
  const [selectedTask, setSelectedTask] = useState<TaskVerbose | null>(null)

  const [filters, setFilters] = useState<TicketsPageFilters>({
    search: '',
    region: '',
    district: '',
    brand: '',
    model: '',
    status: null,
  })

  const { data, isSuccess } = useQuery({
    queryKey: [QueryKey.TicketsGeos, organizationID, page, filters],
    queryFn: async (): Promise<TaskVerbose[]> => {
      const options: WorkSersTasksVerboseListParams = {
        orgId: organizationID.toString(),
        offset: page * PAGINATION_DEFAULT_LIMIT,
        limit: PAGINATION_DEFAULT_LIMIT,
        organization_name: filters.search,
        organization_address_region: filters.region,
        organization_address_district: filters.district,
        vehicle_brand_name: filters.brand,
        vehicle_model_name: filters.model,
        status: filters.status ? [filters.status] : undefined,
      }

      const { data: tasks, headers } = await api.workSersTasksVerboseList(options)
      const { data: geos } = await api.workSersTasksGeosList(options)

      const result = tasks.length > 0 ? tasks.map((task) => ({
        task,
        geo: geos.find(({ id }) => id == task.id),
      })) : []

      setCount(headers['x-count'] ? +headers['x-count'] : 0)
      setUpdatedTime(new Date())

      if (selectedTask && tasks.find((task) => task.id === selectedTask.task.id)) {
        return result
      }

      handleSelectTask(0, result)
      return result
    },
    refetchInterval: +updateTime * 60000,
    refetchOnWindowFocus: false,
  })

  const changeFilters = (filters: Partial<TicketsPageFilters>) => {
    setPage(0)
    setFilters((prev) => ({ ...prev, ...filters }))
  }

  const changeFiltersDebounced = useDebounceCallback(changeFilters, 500)

  const handleSearch = (search: string, immediate = false) => {
    setSearch(search)

    if (immediate) {
      changeFilters({ search })
    } else (
      changeFiltersDebounced({ search })
    )
  }

  const handleSelectTask = useCallback((index: number | null, tasks?: TaskVerbose[]) => {
    const task = typeof index === 'number' ? (tasks ?? data)?.[index] ?? null : null

    setSelectedTaskIndex(index)
    setSelectedTask(task)

    if (task?.geo) {
      mapRef.current?.flyToBounds(getGeoInfoBounds(task.geo), { duration: MAP_FLY_DURATION })
    }
  }, [data, mapRef])

  return (
    <>
      <Map
        ref={mapRef}
        geos={data?.map(({ geo }) => geo).filter((geo): geo is WorkTaskGeo => !!geo) ?? []}
        selectedTask={selectedTask}
        sx={{
          height: '45vh',
          minHeight: '328px',
          maxHeight: '500px',
        }}
        onSelectPrev={(data?.length ?? 0) > 1 && !!selectedTaskIndex ? () => handleSelectTask(selectedTaskIndex - 1) : null}
        onSelectNext={(data?.length ?? 0) > 1 && (selectedTaskIndex === null || selectedTaskIndex < data!.length - 1) ? () => handleSelectTask((selectedTaskIndex ?? -1) + 1) : null}
      />
      <Container
        maxWidth={'xl'}
        sx={{
          paddingTop: '24px',
        }}
      >
        <TableHeader
          sx={{ marginTop: '8px' }}
          amount={count}
          renderSearch={(
            <FieldInputSearch
              value={search}
              onChange={(event) => handleSearch(event.target.value)}
            />
          )}
          onFilterClick={() => setFiltersOpen(true)}
        >
          Заявки
        </TableHeader>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginTop: '8px',
          }}
        >
          {filters.search && (
            <Chip
              size={'small'}
              label={`"${filters.search}"`}
              onDelete={() => handleSearch('', true)}
            />
          )}
          {filters.region && (
            <Chip
              size={'small'}
              label={`Регион: "${filters.region}"`}
              onDelete={() => changeFilters({ region: '' })}
            />
          )}
          {filters.district && (
            <Chip
              size={'small'}
              label={`Район: "${filters.district}"`}
              onDelete={() => changeFilters({ district: '' })}
            />
          )}
          {filters.brand && (
            <Chip
              size={'small'}
              label={`Бренд: "${filters.brand}"`}
              onDelete={() => changeFilters({ brand: '' })}
            />
          )}
          {filters.model && (
            <Chip
              size={'small'}
              label={`Модель: "${filters.model}"`}
              onDelete={() => changeFilters({ model: '' })}
            />
          )}
          {filters.status && (
            <Chip
              size={'small'}
              label={`Статус заявки: "${StatusEnumLabel[filters.status]}"`}
              onDelete={() => changeFilters({ status: null })}
            />
          )}
        </Box>
        <TicketsTable
          page={page}
          count={count}
          isSuccess={isSuccess}
          data={data?.map(({ task }) => task) ?? []}
          onPageChange={setPage}
          onSelectTask={(id) => handleSelectTask(data?.findIndex(({ task }) => task.id === id) ?? null)}
        />
        <TicketDrawerFilters
          open={filtersOpen}
          filters={filters}
          onChange={changeFiltersDebounced}
          onClose={() => setFiltersOpen(false)}
        />
      </Container>
    </>
  )
}
