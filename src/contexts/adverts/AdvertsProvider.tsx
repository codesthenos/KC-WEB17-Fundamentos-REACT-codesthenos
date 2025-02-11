import { useEffect, useState } from 'react'
import { AdvertsContext } from './advertsContext'
import { Advert } from '../../pages/adverts/types'
import { getAdverts } from '../../pages/adverts/service'
import { isApiClientError } from '../../api/client'
import { ApiClientError } from '../../api/error'
import { useErrorLoading } from '../error-loading/errorLoadingContext'

export const AdvertsProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [adverts, setAdverts] = useState<Advert[] | null>(null)
  const { applyError, clearError, applyLoading, clearLoading } =
    useErrorLoading()

  useEffect(() => {
    const fetchAdverts = async () => {
      clearError()
      applyLoading()
      try {
        const fetchedAdverts = await getAdverts()
        setAdverts(fetchedAdverts)
      } catch (error) {
        if (isApiClientError(error)) {
          applyError({ error })
        } else {
          applyError({ error: new ApiClientError('SOMETHING WENT WRONG') })
        }
      } finally {
        clearLoading()
      }
    }
    fetchAdverts()
  }, [])

  const advertsValue = { adverts }

  return (
    <AdvertsContext.Provider value={advertsValue}>
      {children}
    </AdvertsContext.Provider>
  )
}
