import { useRef, useEffect } from 'react'

export const usePageTitle = (title: string, prevailOnUnmount = false) => {
  const defaultTitle = useRef(document.title)

  useEffect(() => {
    document.title = title + ' - СЕРВИСПРО'
  }, [title])

  useEffect(() => () => {
    if (!prevailOnUnmount) {
      document.title = defaultTitle.current + ' - СЕРВИСПРО'
    }
  }, [])
}

