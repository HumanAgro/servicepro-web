import { QueryKey } from '@features/shared/data'
import { staleTime } from '@helpers/index'
import { useApi } from '@hooks/useApi'
import { useOrganizationID } from '@hooks/useOrganizationID'
import { useQuery } from '@tanstack/react-query'

export const useRegions = () => {
  const { api } = useApi()
  const { organizationID } = useOrganizationID()

  return useQuery({
    queryKey: [QueryKey.Regions, organizationID],
    queryFn: async () => {
      const { data } = await api.etcRegionsList({})
      return data ?? []
    },
    staleTime: staleTime({ hours: 24 }),
    initialData: [],
    initialDataUpdatedAt: 0,
  })
}
