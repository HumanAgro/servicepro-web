import { Navigate, Outlet } from 'react-router-dom'
import { LoaderFullScreen } from '@components/LoaderFullScreen'
import { useProfile } from '@features/shared/hooks/useProfile'
import { useOrganizationID } from '@hooks/useOrganizationID'

export const OrganizationGuard = () => {
  const { organizationID } = useOrganizationID()
  const { data: profile } = useProfile()

  if (!profile) {
    return <LoaderFullScreen />
  }

  return profile.employments.some((employment) => employment.organization.id === organizationID) ? <Outlet /> : <Navigate to={'/'} />
}
