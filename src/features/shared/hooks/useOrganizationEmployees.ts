import { QueryKey } from '@features/shared/data'
import { staleTime } from '@helpers/index'
import { useApi } from '@hooks/useApi'
import { useOrganizationID } from '@hooks/useOrganizationID'
import { useQuery } from '@tanstack/react-query'

export const useOrganizationEmployees = (relatedOrganization: number) => {
  const { organizationID } = useOrganizationID()
  const { api } = useApi()

  return useQuery({
    queryKey: [QueryKey.OrganizationEmployees, organizationID, relatedOrganization],
    queryFn: async () => {
      const { data } = await api.orgSersRelatedOrgsEmployeesList({
        orgId: organizationID.toString(),
        relatedId: relatedOrganization.toString(),
      })

      return data ?? []
    },
    initialData: [],
    initialDataUpdatedAt: 0,
    staleTime: staleTime({ minutes: 15 }),
  })
}
