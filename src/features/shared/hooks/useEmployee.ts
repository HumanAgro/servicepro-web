import { useEmployeesList } from '@features/shared/hooks/useEmployeesList'

export const useEmployee = (id?: number | null) => {
  const { data: employees } = useEmployeesList()

  return {
    employee: employees.find((employee) => employee.id === id) ?? null,
  }
}
