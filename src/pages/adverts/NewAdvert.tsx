import { Header } from '../../components/adverts/Header'
import { NewAdvertForm } from '../../components/adverts/NewAdvertForm'
import { Footer } from '../../components/Footer'

export const NewAdvertPage = () => {
  return (
    <>
      <Header pathName="New Advert" />
      <main className="mx-auto mt-16 flex max-w-3xl grow flex-col items-center text-center font-semibold uppercase">
        <NewAdvertForm />
      </main>
      <Footer />
    </>
  )
}
