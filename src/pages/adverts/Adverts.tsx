import { Header } from '../../components/adverts/Header'
import { Footer } from '../../components/Footer'
import { AdvertsList } from '../../components/adverts/AdvertsList'

export const AdvertsPage = () => {
  return (
    <>
      <Header pathName="Adverts" />
      <main className="mx-auto mt-16 mb-4 flex max-w-3xl grow flex-col items-center text-center font-semibold uppercase">
        <AdvertsList />
      </main>
      <Footer />
    </>
  )
}
