import { QueryKey } from '@features/shared/data'
import { useApi } from '@hooks/useApi'
import { useOrganizationID } from '@hooks/useOrganizationID'
import { useQuery } from '@tanstack/react-query'

export const useQueryRelatedOrgs = () => {
  const { organizationID } = useOrganizationID()
  const { api } = useApi()

  return useQuery({
    queryKey: [QueryKey.RelatedOrgs, organizationID],
    queryFn: async () => {
      const { data } = await api.orgSersRelatedOrgsList({
        orgId: organizationID.toString(),
      })

      return data ?? []
    },
    staleTime: 5 * 60 * 1000,
  })
}
