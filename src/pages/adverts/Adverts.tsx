import { Header } from '../../components/adverts/Header'
import { Footer } from '../../components/Footer'
import { AdvertsList } from '../../components/adverts/AdvertsList'

export const AdvertsPage = () => {
  return (
    <>
      <Header pathName="Adverts" />
      <main className="mx-auto my-8 flex max-w-3xl flex-col items-center justify-center text-center font-semibold uppercase">
        <AdvertsList />
      </main>
      <Footer />
    </>
  )
}
