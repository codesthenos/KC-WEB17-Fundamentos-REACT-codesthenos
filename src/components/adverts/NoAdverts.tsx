import { useFilters } from '../../contexts/filters/filtersContext'
import { CreateAdvertButton } from './CreateAdvertButton'

export const NoAdverts = () => {
  const { filters } = useFilters()
  const isAnyFilterActive = filters.name || filters.sale || filters.demand
  const text = isAnyFilterActive
    ? 'Any advert matches the filters'
    : 'Create the first advert!'
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="font-semi my-8 text-center text-2xl">{text}</h3>
      <CreateAdvertButton />
    </div>
  )
}
