import { FilterInputText } from './FilterInputText'
import { FilterButton } from './FilterButton'
import { Checkbox } from '../Checkbox'
import { useFilters } from '../../contexts/filters/filtersContext'

export const FilterForm = () => {
  const {
    applyFilters,
    resetFilters,
    nameRef,
    saleRef,
    demandRef,
    mobileRef,
    motorRef,
    workRef,
    lifestyleRef
  } = useFilters()
  return (
    <form onSubmit={applyFilters} className="mx-auto mt-4 max-w-3xs">
      <FilterInputText inputId="nameFilter" labelText="name" ref={nameRef} />
      <div className="mb-1 flex items-center justify-between">
        <Checkbox labelFor="saleFilter" labelText="ON SALE" ref={saleRef} />
        <Checkbox
          labelFor="demandFilter"
          labelText="ON DEMAND"
          ref={demandRef}
        />
      </div>
      <fieldset>
        <legend className="mb-1 font-semibold">TAGS</legend>
        <div className="mb-2 grid grid-cols-2">
          <div>
            <Checkbox
              ref={mobileRef}
              labelFor="mobile"
              labelText="mobile"
              onClick={() => {}}
            />
            <Checkbox
              ref={workRef}
              labelFor="work"
              labelText="work"
              onClick={() => {}}
            />
          </div>
          <div>
            <Checkbox
              ref={motorRef}
              labelFor="motor"
              labelText="motor"
              onClick={() => {}}
            />
            <Checkbox
              ref={lifestyleRef}
              labelFor="lifestyle"
              labelText="lifestyle"
              onClick={() => {}}
            />
          </div>
        </div>
      </fieldset>
      <div className="mt-4 flex items-center justify-between">
        <FilterButton type="button" buttonText="RESET" onClick={resetFilters} />
        <FilterButton type="submit" buttonText="APPLY" onClick={() => {}} />
      </div>
    </form>
  )
}
