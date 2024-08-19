import { Fragment, useMemo, useState } from 'react'
import { FieldInputSearch } from '@components/FieldInputSearch'
import { FiltersChips } from '@components/FiltersChips'
import { InformerNoResults } from '@components/InformerNoResults'
import { TableHeader } from '@components/TableHeader'
import { DEBOUNCE_DELAY_DEFAULT } from '@constants/index'
import { QueryKey } from '@features/shared/data'
import { getFiltersFilledAmount } from '@features/shared/helpers'
import { TicketsPageFiltersLabels } from '@features/tickets/data'
import { getTicketsPageFiltersDefault } from '@features/tickets/helpers'
import { TicketsPageFilters } from '@features/tickets/types'
import { VehicleDrawerFilters } from '@features/vehicles/components/VehicleDrawerFilters'
import { VehiclesTable } from '@features/vehicles/components/VehiclesTable'
import { getVehiclesPageFiltersDefault } from '@features/vehicles/helpers'
import { VehiclesPageFilters } from '@features/vehicles/types'
import { useApi } from '@hooks/useApi'
import { useOrganizationID } from '@hooks/useOrganizationID'
import { usePageTitle } from '@hooks/usePageTitle'
import { Button, Chip } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { useDebounce } from '@uidotdev/usehooks'

export const VehiclesRoute = () => {
  usePageTitle('Техника')

  const { organizationID } = useOrganizationID()
  const { api } = useApi()

  const [filtersOpen, setFiltersOpen] = useState(false)
  const [filters, setFilters] = useState<VehiclesPageFilters>(getVehiclesPageFiltersDefault)
  const filtersDebounced = useDebounce(filters, DEBOUNCE_DELAY_DEFAULT)
  const filtersFilled = useMemo(() => getFiltersFilledAmount(filters), [filters])

  const changeFilters = (filters: Partial<VehiclesPageFilters>) => {
    setFilters((prev) => ({ ...prev, ...filters }))
  }

  const { data, isSuccess, isFetching } = useQuery({
    queryKey: [QueryKey.Vehicles, organizationID, filtersDebounced],
    queryFn: async () => {
      const { data } = await api.workSersVehiclesList({
        orgId: organizationID.toString(),
        organization_name: filtersDebounced.search,
        organization_address_region: filtersDebounced.region,
        organization_address_district: filtersDebounced.district,
        brand_name: filtersDebounced.brand,
        model_name: filtersDebounced.model,
      })

      return data
    },
    initialData: [],
    initialDataUpdatedAt: 0,
  })

  return (
    <>
      <TableHeader
        sx={{ marginTop: '8px' }}
        renderSearch={(
          <FieldInputSearch
            value={filters.search}
            placeholder={'Поиск по клиенту'}
            onChange={(event) => changeFilters({ search: event.target.value })}
          />
        )}
        filtered={filtersFilled > 1}
        onFilterClick={() => setFiltersOpen(true)}
      >
        Техника
      </TableHeader>
      <FiltersChips
        filled={filtersFilled}
        onClear={() => changeFilters(getTicketsPageFiltersDefault())}
      >
        {(Object.entries(filters) as [keyof TicketsPageFilters, string | unknown[]][]).map(([key, value]) => (
          <Fragment key={key}>
            {Array.isArray(value) ? (
              <>

              </>
            ) : (
              <>
                {value && (
                  <Chip
                    size={'small'}
                    label={`${TicketsPageFiltersLabels[key] ? `${TicketsPageFiltersLabels[key]}: ` : ''}"${value}"`}
                    onDelete={() => changeFilters({ [key]: '' })}
                  />
                )}
              </>
            )}
          </Fragment>
        ))}
      </FiltersChips>
      {!isFetching && !data.length && (
        <InformerNoResults
          title={'Техника не найдена'}
          subtitle={'Возможно она еще не была добавлена'}
          filtered={filtersFilled > 0}
          actions={(
            <Button
              variant={'outlined'}
              color={'info'}
              onClick={() => changeFilters(getVehiclesPageFiltersDefault())}
            >
              Очистить всё
            </Button>
          )}
          sx={{
            marginTop: '20px',
          }}
        />
      )}
      {(isFetching || data.length > 0) && (
        <VehiclesTable
          data={data}
          isSuccess={isSuccess}
        />
      )}
      <VehicleDrawerFilters
        open={filtersOpen}
        filters={filters}
        onChange={changeFilters}
        onClose={() => setFiltersOpen(false)}
      />
    </>
  )
}
