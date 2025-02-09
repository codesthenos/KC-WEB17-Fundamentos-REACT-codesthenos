import { createContext, useContext } from 'react'

interface FiltersContextI {
  filters: { name: string | null; sale: boolean | null }
  applyFilters: (event: React.FormEvent<HTMLFormElement>) => void
  resetFilters: () => void
  nameRef: React.RefObject<HTMLInputElement> | null
  saleRef: React.RefObject<HTMLInputElement> | null
  demandRef: React.RefObject<HTMLInputElement> | null
}

export const FiltersContext = createContext<FiltersContextI>({
  filters: { name: null, sale: null },
  applyFilters: () => {},
  resetFilters: () => {},
  nameRef: null,
  saleRef: null,
  demandRef: null
})

export const useFilters = () => {
  return useContext(FiltersContext)
}
