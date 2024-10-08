import { AuthContextData } from '@features/ui/contexts/AuthProvider'
import { rr } from '@features/ui/types'
import { useAuth } from '@hooks/useAuth'
import { publicClient } from '~/api'

export const useRefreshToken = () => {
  const { auth, setAuth } = useAuth()

  const refresh = async () => {
    const { data } = await rr(publicClient.api.accountJwtRefreshCookieCreate)({ access: auth?.accessToken }, { withCredentials: true })

    setAuth((prev: AuthContextData) => ({
      ...prev,
      accessToken: data.access,
    }))

    return data.access
  }

  return { refreshToken: refresh }
}
