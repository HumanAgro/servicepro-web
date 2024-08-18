import { useEmployeesList } from '@features/shared/hooks/useEmployeesList'
import { RoleEnum } from '~/api/servicepro.generated'

export const useEngineersList = () => {
  const { data: employees } = useEmployeesList()

  return {
    data: employees.filter(({ role }) => role === RoleEnum.Engineer),
  }
}
