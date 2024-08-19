import { QueryKey } from '@features/shared/data'
import { useBrands } from '@features/shared/hooks/useBrands'
import { staleTime } from '@helpers/index'
import { useApi } from '@hooks/useApi'
import { useOrganizationID } from '@hooks/useOrganizationID'
import { useQuery } from '@tanstack/react-query'

export const useModels = (brand?: string) => {
  const { api } = useApi()
  const { organizationID } = useOrganizationID()
  const { data: brands } = useBrands()

  return useQuery({
    queryKey: [QueryKey.Models, organizationID, brand],
    queryFn: async () => {
      const { data } = await api.vehicleOrgsModelsList({
        orgId: organizationID.toString(),
        brand: brands.find(({ name }) => name === brand)?.id,
      })
      return data ?? []
    },
    staleTime: staleTime({ hours: 1 }),
    initialData: [],
    initialDataUpdatedAt: 0,
  })
}
