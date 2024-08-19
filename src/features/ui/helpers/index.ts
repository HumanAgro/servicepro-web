export const toBase64 = (file: File) => new Promise<string>((resolve, reject) => {
  const reader = new FileReader()

  reader.readAsDataURL(file)
  reader.onload = () => resolve(reader.result as string)
  reader.onerror = reject
})

export const staleTime = ({ hours = 0, minutes = 0 }: { hours?: number; minutes?: number }) => {
  return (hours * 60 * 60 * 1000) + (minutes * 60 * 1000)
}

type ValueOf<T> = T[keyof T]
type Entries<T> = [keyof T, ValueOf<T>][]

export const objectEntries = <T extends object>(obj: T): Entries<T> => {
  return Object.entries(obj) as Entries<T>
}
