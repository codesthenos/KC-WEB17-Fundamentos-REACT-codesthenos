import { useSearchParams } from 'react-router-dom'
import { FiltersContext } from './filtersContext'
import { useEffect, useRef, useState } from 'react'

interface Filters {
  name: string | null
  sale: boolean
  demand: boolean
}

export const FiltersProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filters, setFilters] = useState<Filters>({
    name: null,
    sale: false,
    demand: false
  })

  const nameRef = useRef<HTMLInputElement>(null)
  const saleRef = useRef<HTMLInputElement>(null)
  const demandRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const name = searchParams.get('name')
    const sale = searchParams.get('sale')
    const demand = searchParams.get('demand')

    const normalizeName = (name: string | null) => {
      return name?.length ? name : null
    }
    const normalizeBoolean = (param: string | null) => {
      return param === 'true'
    }

    const normalizedName = normalizeName(name)
    const normalizedSale = normalizeBoolean(sale)
    const normalizedDemand = normalizeBoolean(demand)

    setFilters({
      name: normalizedName,
      sale: normalizedSale,
      demand: normalizedDemand
    })

    if (nameRef.current) {
      nameRef.current.value = name || ''
    }
    if (saleRef.current) {
      saleRef.current.checked = normalizedSale ?? false
    }
    if (demandRef.current) {
      demandRef.current.checked = normalizedDemand ?? false
    }
  }, [searchParams])

  const handleApplyFilters = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nameSearchParam = nameRef.current!.value
    let saleSearchParam = saleRef.current!.checked ? 'true' : 'false'
    let demandSearchParam = demandRef.current!.checked ? 'true' : 'false'

    if (saleSearchParam === demandSearchParam) {
      saleSearchParam = 'false'
      demandSearchParam = 'false'
    }
    setSearchParams({
      name: nameSearchParam,
      sale: saleSearchParam,
      demand: demandSearchParam
    })
  }

  const handleResetFilter = () => {
    setSearchParams()
  }

  const filtersValue = {
    filters,
    applyFilters: handleApplyFilters,
    resetFilters: handleResetFilter,
    nameRef,
    saleRef,
    demandRef
  }
  return (
    <FiltersContext.Provider value={filtersValue}>
      {children}
    </FiltersContext.Provider>
  )
}
