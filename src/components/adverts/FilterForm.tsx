import { useRef, useState } from 'react'
import { FilterInputText } from './FilterInputText'
import { FilterButton } from './FilterButton'
import { Checkbox } from '../Checkbox'

interface Filters {
  name: string | null
  sale: boolean | null
}

export const FilterForm = () => {
  const [filters, setFilters] = useState<Filters>({ name: null, sale: null })

  const nameRef = useRef<HTMLInputElement>(null)
  const saleRef = useRef<HTMLInputElement>(null)

  const handleApplyFilters = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setFilters({ name: nameRef.current!.value, sale: saleRef.current!.checked })
  }

  const handleResetFilter = () => {
    setFilters({ name: null, sale: null })
    nameRef.current!.value = ''
    saleRef.current!.checked = false
  }
  console.log(filters)
  return (
    <form onSubmit={handleApplyFilters} className="mx-auto mt-4 max-w-xs">
      <FilterInputText inputId="nameFilter" labelText="name" ref={nameRef} />
      <Checkbox labelFor="saleFilter" labelText="ON SALE" ref={saleRef} />
      <div className="mt-4 flex items-center justify-between">
        <FilterButton
          type="button"
          buttonText="RESET"
          onClick={handleResetFilter}
        />
        <FilterButton type="submit" buttonText="APPLY" onClick={() => {}} />
      </div>
    </form>
  )
}
