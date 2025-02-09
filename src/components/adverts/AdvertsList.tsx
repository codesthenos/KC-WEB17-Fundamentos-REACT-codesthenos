import { NoAdverts } from './NoAdverts'
import { AdvertItem } from './AdvertItem'
import { LoadingSpinner } from '../LoadingSpinner'
import { useAdverts } from '../../contexts/adverts/advertsContext'

export const AdvertsList = () => {
  const { adverts, isLoading, error } = useAdverts()

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
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {adverts.map((advert) => (
            <AdvertItem advert={advert} key={advert.id} />
          ))}
        </ul>
      )}
      {showNoAdverts && <NoAdverts />}
    </>
  )
}
