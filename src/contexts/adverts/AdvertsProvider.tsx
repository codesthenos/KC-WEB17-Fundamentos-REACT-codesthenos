import { useState } from 'react'
import { AdvertsContext } from './advertsContext'
import { Advert } from '../../pages/adverts/types'

export const AdvertsProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [adverts, setAdverts] = useState<Advert[]>([])
  return (
    <AdvertsContext.Provider value={adverts}>
      {children}
    </AdvertsContext.Provider>
  )
}
