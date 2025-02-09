import { useEffect, useState } from 'react'
import { AdvertsContext } from './advertsContext'
import { Advert } from '../../pages/adverts/types'
import { getAdverts } from '../../pages/adverts/service'
import { isApiClientError } from '../../api/client'
import type { ApiClientError } from '../../api/error'

export const AdvertsProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [adverts, setAdverts] = useState<Advert[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<ApiClientError | null>(null)

  useEffect(() => {
    const fetchAdverts = async () => {
      try {
        setIsLoading(true)
        const fetchedAdverts = await getAdverts()
        setAdverts(fetchedAdverts)
      } catch (error) {
        if (isApiClientError(error)) {
          setError(error)
        }
      } finally {
        setIsLoading(false)
      }
    }
    fetchAdverts()
  }, [])

  const advertsValue = { adverts, isLoading, error }

  return (
    <AdvertsContext.Provider value={advertsValue}>
      {children}
    </AdvertsContext.Provider>
  )
}
