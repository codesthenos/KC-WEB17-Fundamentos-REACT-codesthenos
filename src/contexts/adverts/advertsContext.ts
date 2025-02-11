import { createContext, useContext } from 'react'
import { Advert } from '../../pages/adverts/types'

interface AdvertsContextI {
  adverts: Advert[] | null
}

export const AdvertsContext = createContext<AdvertsContextI>({
  adverts: null
})

export const useAdverts = () => {
  return useContext(AdvertsContext)
}
