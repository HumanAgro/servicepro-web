import { TicketMapUpdateTime, ticketMapUpdateTimeOptions } from '@features/tickets/data'
import { create } from 'zustand'

interface MapStoreState {
  updateTime: TicketMapUpdateTime
  setUpdateTime: (time: TicketMapUpdateTime) => void
  updatedTime: Date
  setUpdatedTime: (time: Date) => void
}

export const useMapStore = create<MapStoreState>((setState) => ({
  updateTime: ticketMapUpdateTimeOptions[2].value,
  setUpdateTime: (time: TicketMapUpdateTime) => setState({ updateTime: time }),
  updatedTime: new Date(),
  setUpdatedTime: (time) => setState({ updatedTime: time }),
}))
