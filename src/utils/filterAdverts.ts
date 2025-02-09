import type { Filters } from '../contexts/filters/filtersContext'
import type { Advert } from '../pages/adverts/types'

const filterName = ({ adverts, name }: { adverts: Advert[]; name: string }) => {
  return adverts.filter((advert) =>
    advert.name.toLowerCase().includes(name.toLowerCase())
  )
}
const filterSale = ({
  adverts,
  sale,
  demand
}: {
  adverts: Advert[]
  sale: boolean | null
  demand: boolean | null
}) => {
  if (sale) {
    return adverts.filter((advert) => advert.sale)
  }
  if (demand) {
    return adverts.filter((advert) => !advert.sale)
  }
  return adverts
}
const filterTag = ({
  adverts,
  tag
}: {
  adverts: Advert[]
  tag: 'motor' | 'lifestyle' | 'work' | 'mobile'
}) => {
  return adverts.filter((advert) => advert.tags.includes(tag))
}
export const filterAdverts = ({
  adverts,
  filters
}: {
  adverts: Advert[]
  filters: Filters
}) => {
  const { demand, sale, name, motor, mobile, work, lifestyle } = filters
  const tags = [motor, mobile, work, lifestyle]
  let filteredAdverts = [...adverts]
  if (sale || demand) {
    filteredAdverts = filterSale({
      adverts: filteredAdverts,
      sale: sale,
      demand: demand
    })
  }
  if (name) {
    filteredAdverts = filterName({ adverts: filteredAdverts, name: name })
  }
  if (tags) {
    tags.forEach((tag) => {
      if (tag) {
        filteredAdverts = filterTag({
          adverts: filteredAdverts,
          tag: tag as 'motor' | 'lifestyle' | 'work' | 'mobile'
        })
      }
    })
  }
  return filteredAdverts
}
