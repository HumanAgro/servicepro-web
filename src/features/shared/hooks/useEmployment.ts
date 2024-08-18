import { useProfile } from '@features/shared/hooks/useProfile'
import { useOrganizationID } from '@hooks/useOrganizationID'
import { MyEmployment } from '~/api/servicepro.generated'

export const useEmployment = (): { employment: MyEmployment | null } => {
  const { organizationID } = useOrganizationID()
  const { data } = useProfile()

  return {
    employment: data?.employments.find(({ organization: { id } }) => id === organizationID) ?? data?.employments[0] ?? null,
  }
}
