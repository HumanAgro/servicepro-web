import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { LoaderFullScreen } from '@components/LoaderFullScreen'
import { useAuth } from '@hooks/useAuth'
import { useRefreshToken } from '@hooks/useRefreshToken'

export const PersistentLogin = () => {
  const [isLoading, setIsLoading] = useState(true)
  const { refreshToken } = useRefreshToken()
  const { auth, persist } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    let isMounted = true

    const verifyRefreshToken = async () => {
      try {
        await refreshToken()
      } catch (error) {
        navigate('/auth')
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    !auth?.accessToken && persist ? verifyRefreshToken() : setIsLoading(false)

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <>
      {!persist ? <Outlet /> : isLoading ? <LoaderFullScreen /> : <Outlet />}
    </>
  )
}
