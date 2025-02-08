import { useEffect, useRef, useState } from 'react'
import { FilterInputText } from './FilterInputText'
import { FilterButton } from './FilterButton'
import { Checkbox } from '../Checkbox'
import { useSearchParams } from 'react-router-dom'

interface Filters {
  name: string | null
  sale: boolean | null
}

export const FilterForm = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filters, setFilters] = useState<Filters>({ name: null, sale: null })

  const nameRef = useRef<HTMLInputElement>(null)
  const saleRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const name = searchParams.get('name')
    const sale = searchParams.get('sale')
    const booleanSale = sale === 'true'

    setFilters({ name, sale: booleanSale })

    if (nameRef.current) {
      nameRef.current.value = name || ''
    }
    if (saleRef.current) {
      saleRef.current.checked = booleanSale
    }
  }, [searchParams])

  const handleApplyFilters = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const saleSearchParam = saleRef.current!.checked ? 'true' : 'false'

    setSearchParams({ name: nameRef.current!.value, sale: saleSearchParam })
  }

  const handleResetFilter = () => {
    setSearchParams()
  }
  console.log(filters)
  return (
    <form onSubmit={handleApplyFilters} className="mx-auto mt-4 max-w-xs">
      <FilterInputText inputId="nameFilter" labelText="name" ref={nameRef} />
      <Checkbox labelFor="saleFilter" labelText="ON SALE" ref={saleRef} />
      <div className="mt-4 flex items-center justify-around">
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
