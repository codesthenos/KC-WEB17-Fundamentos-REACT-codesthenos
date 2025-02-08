import { useEffect, useState } from 'react'
import { getAdverts } from '../../pages/adverts/service'
import type { Advert } from '../../pages/adverts/types'
import { NoAdverts } from './NoAdverts'
import { AdvertItem } from './AdvertItem'
import { LoadingSpinner } from '../LoadingSpinner'
import type { ApiClientError } from '../../api/error'
import { isApiClientError } from '../../api/client'

export const AdvertsList = () => {
  const [adverts, setAdverts] = useState<Advert[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<ApiClientError | null>(null)

  useEffect(() => {
    const fetchAdverts = async () => {
      try {
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

  const showList = !isLoading && !error && !!adverts.length
  const showNoAdverts = !isLoading && !error && !adverts.length

  return (
    <>
      {error && (
        <span className="mb-3 block text-red-500">{error.message}</span>
      )}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-zinc-900">
          <LoadingSpinner />
        </div>
      )}
      {showList && (
        <ul>
          {adverts.map((advert) => (
            <AdvertItem advert={advert} key={advert.id} />
          ))}
        </ul>
      )}
      {showNoAdverts && <NoAdverts />}
    </>
  )
}
