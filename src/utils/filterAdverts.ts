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
        return advert.name.includes(filters.name) && advert.sale
      } else if (filters.demand) {
        return advert.name.includes(filters.name) && !advert.sale
      }
      return advert.name.includes(filters.name)
    }
    if (filters.sale) {
      return advert.sale
    } else if (filters.demand) {
      return !advert.sale
    }
    return true
  })
}
