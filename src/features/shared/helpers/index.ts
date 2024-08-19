import { LatLngExpression, LatLngTuple } from 'leaflet'
import { WorkTaskGeo } from '~/api/servicepro.generated'

export const getGeoInfoExpression = (geo: WorkTaskGeo) => {
  // Инженер
  const executor = geo?.executor

  // Текущее местоположение инженера
  const executorLocation: LatLngExpression | null = executor?.geolocation?.[0] ? {
    lat: executor.geolocation[0].lat,
    lng: executor.geolocation[0].lon,
  } : null

  // Метка задачи
  const taskLocation: LatLngExpression | null = geo?.latitude && geo?.longitude ? {
    lat: geo.latitude,
    lng: geo.longitude,
  } : null

  // Маршрут до задачи
  const route: LatLngExpression[] = (geo?.routes?.[0]?.points ?? []).map((point) => ({
    lat: point.lat,
    lng: point.lon,
  }))

  // Пройденный путь
  const routeCompleted: LatLngExpression[] = (geo?.routes?.[0]?.geolocation ?? []).map((point) => ({
    lat: point.lat,
    lng: point.lon,
  }))

  return { executor, executorLocation, taskLocation, route, routeCompleted }
}

export const getGeoInfoBounds = (geo: WorkTaskGeo): LatLngTuple[] => {
  // Инженер
  const executor = geo?.executor

  // Текущее местоположение инженера
  const executorLocation: LatLngTuple | null = executor?.geolocation?.[0] ? [
    executor.geolocation[0].lat,
    executor.geolocation[0].lon,
  ] : null

  // Метка задачи
  const taskLocation: LatLngTuple | null = geo?.latitude && geo?.longitude ? [
    geo.latitude,
    geo.longitude,
  ] : null

  // Маршрут до задачи
  const route: LatLngTuple[] = (geo?.routes?.[0]?.points ?? []).map((point) => ([
    point.lat,
    point.lon,
  ]))

  return [
    ...route,
    ...(executorLocation ? [executorLocation] : []),
    ...(taskLocation ? [taskLocation] : []),
  ]
}

export const getEmployeeRating = (rating: number | null | undefined) => {
  return rating ? rating.toPrecision(2) : null
}

export const getFiltersFilledAmount = (filters: { [key: string]: string | unknown[] }): number => {
  const lists = Object.values(filters).filter((value) => Array.isArray(value))
  const values = Object.values(filters).filter((value) => !Array.isArray(value))

  return lists.filter((list) => list.length > 0).map((v) => v.length).reduce((acc, v) => acc + v, 0) + values.filter(Boolean).length
}
