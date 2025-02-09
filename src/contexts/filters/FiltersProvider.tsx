import { useSearchParams } from 'react-router-dom'
import { type Filters, FiltersContext } from './filtersContext'
import { useEffect, useRef, useState } from 'react'

export const FiltersProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filters, setFilters] = useState<Filters>({
    name: null,
    sale: null,
    demand: null,
    motor: null,
    mobile: null,
    work: null,
    lifestyle: null
  })

  const nameRef = useRef<HTMLInputElement>(null)
  const saleRef = useRef<HTMLInputElement>(null)
  const demandRef = useRef<HTMLInputElement>(null)
  const motorRef = useRef<HTMLInputElement>(null)
  const mobileRef = useRef<HTMLInputElement>(null)
  const workRef = useRef<HTMLInputElement>(null)
  const lifestyleRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const name = searchParams.get('name')
    const sale = searchParams.get('sale')
    const demand = searchParams.get('demand')
    const motor = searchParams.get('motor')
    const mobile = searchParams.get('mobile')
    const work = searchParams.get('work')
    const lifestyle = searchParams.get('lifestyle')

    const normalizeName = (name: string | null) => {
      return name?.length ? name : null
    }
    const normalizeBoolean = (param: string | null) => {
      return param === 'true'
    }
    const normalizeTag = (tag: string | null) => {
      return !!tag
    }

    const normalizedName = normalizeName(name)
    const normalizedSale = normalizeBoolean(sale)
    const normalizedDemand = normalizeBoolean(demand)
    const normalizedMotor = normalizeTag(motor)
    const normalizedMobile = normalizeTag(mobile)
    const normalizedWork = normalizeTag(work)
    const normalizedLifestyle = normalizeTag(lifestyle)

    setFilters({
      name: normalizedName,
      sale: normalizedSale,
      demand: normalizedDemand,
      motor: normalizedMotor,
      mobile: normalizedMobile,
      work: normalizedWork,
      lifestyle: normalizedLifestyle
    })

    if (nameRef.current) {
      nameRef.current.value = name?.trim() || ''
    }
    const fillCheckbox = (
      ref: React.RefObject<HTMLInputElement>,
      normalizedValue: boolean
    ) => {
      if (ref.current) {
        ref.current.checked = normalizedValue ?? false
      }
    }
    fillCheckbox(saleRef, normalizedSale)
    fillCheckbox(demandRef, normalizedDemand)
    fillCheckbox(motorRef, normalizedMotor)
    fillCheckbox(mobileRef, normalizedMobile)
    fillCheckbox(workRef, normalizedWork)
    fillCheckbox(lifestyleRef, normalizedLifestyle)
  }, [searchParams])

  const handleApplyFilters = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nameSearchParam = nameRef.current!.value.trim()
    let saleSearchParam = saleRef.current!.checked ? 'true' : 'false'
    let demandSearchParam = demandRef.current!.checked ? 'true' : 'false'

    if (saleSearchParam === demandSearchParam) {
      saleSearchParam = 'false'
      demandSearchParam = 'false'
    }
    setSearchParams({
      name: nameSearchParam,
      sale: saleSearchParam,
      demand: demandSearchParam,
      motor: motorRef.current!.checked ? 'true' : '',
      mobile: mobileRef.current!.checked ? 'true' : '',
      work: workRef.current!.checked ? 'true' : '',
      lifestyle: lifestyleRef.current!.checked ? 'true' : ''
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
    demandRef,
    motorRef,
    mobileRef,
    workRef,
    lifestyleRef
  }
  return (
    <FiltersContext.Provider value={filtersValue}>
      {children}
    </FiltersContext.Provider>
  )
}
