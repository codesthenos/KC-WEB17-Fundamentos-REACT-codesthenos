import { createContext, useContext } from 'react'
import { Advert } from '../../pages/adverts/types'

interface AdvertsContextI {
  adverts: Advert[]
}

export const AdvertsContext = createContext<AdvertsContextI>({
  adverts: []
})

export const useAdverts = () => {
  return useContext(AdvertsContext)
}
