import { useEffect, useState } from 'react'
import { Advert } from './types'
import { getAdverts } from './service'

export const AdvertsPage = () => {
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
      <h1 className="text-center text-6xl font-bold uppercase">
        TODO Adverts Page
      </h1>
      <ul>
        {adverts.length ? (
          adverts.map((advert) => (
            <li key={advert.id}>
              <h3>{advert.name}</h3>
              <h3>{advert.price}</h3>
            </li>
          ))
        ) : (
          <h2 className="mt-8 text-center text-4xl font-bold text-amber-400">
            NO ADVERTS
          </h2>
        )}
      </ul>
    </>
  )
}
