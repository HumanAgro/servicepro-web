import { SerWorkTaskVerbose, StatusEnum, WorkTaskGeo } from '~/api/servicepro.generated'

export interface TaskVerbose {
  task: SerWorkTaskVerbose
  geo: WorkTaskGeo | undefined
}

export type TicketsPageFilters = {
  search: string
  region: string
  district: string
  brand: string
  model: string
  status: StatusEnum[]
}
