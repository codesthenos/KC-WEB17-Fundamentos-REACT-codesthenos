import { useState, useEffect } from 'react'
import { isApiClientError } from '../../api/client'
import { getAdvert } from '../../pages/adverts/service'
import type { Advert } from '../../pages/adverts/types'
import { LoadingSpinner } from '../LoadingSpinner'
import { useNavigate } from 'react-router-dom'
import { useErrorLoading } from '../../contexts/error-loading/errorLoadingContext'

export const AdvertDetailArticle = ({ advertId }: { advertId: string }) => {
  const [advert, setAdvert] = useState<Advert | null>(null)
  const { loading, applyLoading, clearLoading } = useErrorLoading()

  const navigate = useNavigate()

  useEffect(() => {
    const fetchAdverts = async () => {
      try {
        applyLoading()
        const fetchedAdverts = await getAdvert({ id: advertId })
        setAdvert(fetchedAdverts)
      } catch (error) {
        if (isApiClientError(error)) {
          navigate('/404', { replace: true })
        }
      } finally {
        clearLoading()
      }
    }
    fetchAdverts()
  }, [advertId, navigate, applyLoading, clearLoading])

  const showAdvert = !loading && !!advert
  const advertOn = advert?.sale ? 'SALE' : 'DEMAND'

  return (
    <>
      {loading && (
        <div className="my-6 flex h-[150px] w-[300px] items-center justify-center rounded-2xl bg-zinc-900">
          <LoadingSpinner />
        </div>
      )}
      {showAdvert && (
        <article className="my-4 flex items-center gap-x-4">
          <div>
            <header>
              <h2>{advert.name}</h2>
            </header>
            <h3>ON {advertOn}</h3>
            <h4>{advert.price}$</h4>
          </div>
          <img
            src={advert.photo ? advert.photo : '/placeholder.jpg'}
            alt={`${advert.name} ON ${advertOn}`}
            className="max-w-3xs"
          />
        </article>
      )}
    </>
  )
}
