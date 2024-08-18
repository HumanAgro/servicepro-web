import { QueryKey } from '@features/shared/data'
import { staleTime } from '@helpers/index'
import { useApi } from '@hooks/useApi'
import { useOrganizationID } from '@hooks/useOrganizationID'
import { useQuery } from '@tanstack/react-query'

export const useEmployeesList = () => {
  const { organizationID } = useOrganizationID()
  const { api } = useApi()

  return useQuery({
    queryKey: [QueryKey.OrganizationEmployees, organizationID],
    queryFn: async () => {
      const { data } = await api.orgOrgsEmployeesList({
        orgId: organizationID.toString(),
      })

      return data ?? []
    },
    initialData: [],
    initialDataUpdatedAt: 0,
    staleTime: staleTime({ minutes: 15 }),
  })
}
