import { useEffect, useState } from 'react'
import { Advert } from './types'
import { getAdverts } from './service'
import { Header } from '../../components/adverts/Header'
import { Footer } from '../../components/Footer'

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
      <Header pathName="Adverts" />
      <main className="mx-auto my-8 flex max-w-3xl flex-col items-center justify-center text-center font-semibold uppercase">
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
      </main>
      <Footer />
    </>
  )
}
