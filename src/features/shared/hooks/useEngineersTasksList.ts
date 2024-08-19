import { QueryKey } from '@features/shared/data'
import { useApi } from '@hooks/useApi'
import { useOrganizationID } from '@hooks/useOrganizationID'
import { useQuery } from '@tanstack/react-query'

export const useEngineersTasksList = (query?: string) => {
  const { api } = useApi()
  const { organizationID } = useOrganizationID()

  return useQuery({
    queryKey: [QueryKey.Engineers, organizationID, query],
    queryFn: async () => {
      const { data } = await api.workSersEmployeesList({
        orgId: organizationID.toString(),
        name: query,
        status: ['engineer'],
      })

      return data ?? []
    },
    initialData: [],
    initialDataUpdatedAt: 0,
  })
}
