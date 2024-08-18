import { QueryKey } from '@features/shared/data'
import { staleTime } from '@helpers/index'
import { useApi } from '@hooks/useApi'
import { useAuth } from '@hooks/useAuth'
import { useQuery } from '@tanstack/react-query'
import { MyUserAll } from '~/api/servicepro.generated'

export const useProfile = (onSuccess?: (data: MyUserAll) => void) => {
  const { api } = useApi()
  const { auth } = useAuth()

  return useQuery({
    queryKey: [QueryKey.Profile, auth?.user, auth?.accessToken],
    queryFn: async () => {
      const { data } = await api.orgMyRetrieve()
      onSuccess?.(data)
      return data
    },
    staleTime: staleTime({ hours: 1 }),
    enabled: !!auth?.accessToken,
  })
}
