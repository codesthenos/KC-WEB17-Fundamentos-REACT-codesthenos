import { useEffect, useState } from 'react'
import { getAdverts } from '../../pages/adverts/service'
import type { Advert } from '../../pages/adverts/types'
import { NoAdverts } from './NoAdverts'
import { AdvertItem } from './AdvertItem'

export const AdvertsList = () => {
  const [adverts, setAdverts] = useState<Advert[]>([])

  useEffect(() => {
    const fetchAdverts = async () => {
      const fetchedAdverts = await getAdverts()
      setAdverts(fetchedAdverts)
    }
    fetchAdverts()
  }, [])

  return (
    <>
      {adverts.length ? (
        <ul>
          {adverts.map((advert) => (
            <AdvertItem advert={advert} key={advert.id} />
          ))}
        </ul>
      ) : (
        <NoAdverts />
      )}
    </>
  )
}
