import { FilterInputText } from './FilterInputText'
import { FilterButton } from './FilterButton'
import { Checkbox } from '../Checkbox'
import { useFilters } from '../../contexts/filters/filtersContext'

export const FilterForm = () => {
  const { applyFilters, resetFilters, nameRef, saleRef, demandRef } =
    useFilters()
  return (
    <form onSubmit={applyFilters} className="mx-auto mt-4 max-w-3xs">
      <FilterInputText inputId="nameFilter" labelText="name" ref={nameRef} />
      <div className="flex items-center justify-between">
        <Checkbox labelFor="saleFilter" labelText="ON SALE" ref={saleRef} />
        <Checkbox
          labelFor="demandFilter"
          labelText="ON DEMAND"
          ref={demandRef}
        />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <FilterButton type="button" buttonText="RESET" onClick={resetFilters} />
        <FilterButton type="submit" buttonText="APPLY" onClick={() => {}} />
      </div>
    </form>
  )
}
