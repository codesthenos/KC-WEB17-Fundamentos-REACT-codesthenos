import { useParams } from 'react-router-dom'
import { Header } from '../../components/adverts/Header'
import { Footer } from '../../components/Footer'
import { DeleteAdvertButton } from '../../components/adverts/DeleteAdvert'
import { AdvertDetailArticle } from '../../components/adverts/AdvertDetailArticle'

export const AdvertDetailPage = () => {
  const { id } = useParams()

  return (
    <>
      <Header pathName={`Advert Detail | id: ${id} | `} />
      <main className="mx-auto mt-16 flex max-w-3xl grow flex-col items-center text-center font-semibold uppercase">
        <AdvertDetailArticle advertId={id!} />
        <DeleteAdvertButton advertId={id!} />
      </main>
      <Footer />
    </>
  )
}
