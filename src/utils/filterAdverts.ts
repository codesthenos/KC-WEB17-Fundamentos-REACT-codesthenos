import type { Filters } from '../contexts/filters/filtersContext'
import type { Advert } from '../pages/adverts/types'

export const filterAdverts = ({
  adverts,
  filters
}: {
  adverts: Advert[]
  filters: Filters
}) => {
  return adverts.filter((advert) => {
    if (filters.name) {
      if (filters.sale) {
        return (
          advert.name.toLowerCase().includes(filters.name.toLowerCase()) &&
          advert.sale
        )
      } else if (filters.demand) {
        return (
          advert.name.toLowerCase().includes(filters.name.toLowerCase()) &&
          !advert.sale
        )
      }
      return advert.name.toLowerCase().includes(filters.name.toLowerCase())
    }
    if (filters.sale) {
      return advert.sale
    } else if (filters.demand) {
      return !advert.sale
    }
    return true
  })
}
