import { createContext, useContext } from 'react'

export interface Filters {
  name: string | null
  sale: boolean | null
  demand: boolean | null
  motor: string | null
  mobile: string | null
  work: string | null
  lifestyle: string | null
}

interface FiltersContextI {
  filters: Filters
  applyFilters: (event: React.FormEvent<HTMLFormElement>) => void
  resetFilters: () => void
  nameRef: React.RefObject<HTMLInputElement> | null
  saleRef: React.RefObject<HTMLInputElement> | null
  demandRef: React.RefObject<HTMLInputElement> | null
  motorRef: React.RefObject<HTMLInputElement> | null
  mobileRef: React.RefObject<HTMLInputElement> | null
  workRef: React.RefObject<HTMLInputElement> | null
  lifestyleRef: React.RefObject<HTMLInputElement> | null
}

export const FiltersContext = createContext<FiltersContextI>({
  filters: {
    name: null,
    sale: null,
    demand: null,
    motor: null,
    mobile: null,
    work: null,
    lifestyle: null
  },
  applyFilters: () => {},
  resetFilters: () => {},
  nameRef: null,
  saleRef: null,
  demandRef: null,
  motorRef: null,
  mobileRef: null,
  workRef: null,
  lifestyleRef: null
})

export const useFilters = () => {
  return useContext(FiltersContext)
}
