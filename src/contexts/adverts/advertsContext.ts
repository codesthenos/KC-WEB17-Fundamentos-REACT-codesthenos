import { createContext, useContext } from 'react'
import { Advert } from '../../pages/adverts/types'
import { ApiClientError } from '../../api/error'

interface AdvertsContextI {
  adverts: Advert[]
  error: ApiClientError | null
  isLoading: boolean
}

export const AdvertsContext = createContext<AdvertsContextI>({
  adverts: [],
  error: null,
  isLoading: false
})

export const useAdverts = () => {
  return useContext(AdvertsContext)
}
