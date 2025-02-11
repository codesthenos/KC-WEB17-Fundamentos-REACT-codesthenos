import { NoAdverts } from './NoAdverts'
import { AdvertItem } from './AdvertItem'
import { LoadingSpinner } from '../LoadingSpinner'
import { useAdverts } from '../../contexts/adverts/advertsContext'
import { useFilters } from '../../contexts/filters/filtersContext'
import { filterAdverts } from '../../utils/filterAdverts'
import { useErrorLoading } from '../../contexts/error-loading/errorLoadingContext'

export const AdvertsList = () => {
  const { adverts } = useAdverts()
  const { filters } = useFilters()
  const { loading, error } = useErrorLoading()
  const renderAdverts = adverts
    ? filterAdverts({ adverts: [...adverts], filters })
    : []

  const showList = !loading && !error && !!adverts && !!renderAdverts.length
  const showNoAdverts = !loading && !error && !!adverts && !renderAdverts.length

  return (
    <>
      {error && (
        <span className="mb-3 block text-red-500">{error.message}</span>
      )}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <LoadingSpinner />
        </div>
      )}
      {showList && (
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {renderAdverts.map((advert) => (
            <AdvertItem advert={advert} key={advert.id} />
          ))}
        </ul>
      )}
      {showNoAdverts && <NoAdverts />}
    </>
  )
}
