import { Header } from '../../components/adverts/Header'
import { NewAdvertForm } from '../../components/adverts/NewAdvertForm'
import { Footer } from '../../components/Footer'

export const NewAdvertPage = () => {
  return (
    <>
      <Header pathName="New Advert" />
      <main className="mx-auto my-8 flex max-w-3xl flex-col items-center justify-center text-center font-semibold uppercase">
        <NewAdvertForm />
      </main>
      <Footer />
    </>
  )
}
