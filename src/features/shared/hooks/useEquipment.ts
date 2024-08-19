import { QueryKey } from '@features/shared/data'
import { staleTime } from '@helpers/index'
import { useApi } from '@hooks/useApi'
import { useOrganizationID } from '@hooks/useOrganizationID'
import { useQuery } from '@tanstack/react-query'

export const useEquipment = () => {
  const { api } = useApi()
  const { organizationID } = useOrganizationID()

  return useQuery({
    queryKey: [QueryKey.Types, organizationID],
    queryFn: async () => {
      const { data } = await api.vehicleOrgsEquipmentList({ orgId: organizationID.toString() })
      return data ?? []
    },
    staleTime: staleTime({ hours: 1 }),
    initialData: [],
    initialDataUpdatedAt: 0,
  })
}
