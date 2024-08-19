import { VehiclesPageFilters } from '@features/vehicles/types'

export const getVehiclesPageFiltersDefault = (): VehiclesPageFilters => ({
  search: '',
  region: '',
  district: '',
  brand: '',
  model: '',
  equipment: '',
})
