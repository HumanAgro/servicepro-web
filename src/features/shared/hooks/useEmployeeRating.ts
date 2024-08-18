import { getEmployeeRating } from '@features/shared/helpers'
import { useEmployeesList } from '@features/shared/hooks/useEmployeesList'

export const useEmployeeRating = (id?: number | null) => {
  const { data: employees } = useEmployeesList()

  return {
    rating: getEmployeeRating(id ? employees.find((employee) => employee.id === id)?.rating?.value ?? null : null),
  }
}
