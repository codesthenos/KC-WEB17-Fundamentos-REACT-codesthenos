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
      <main className="mx-auto my-8 flex max-w-3xl flex-col items-center justify-center text-center font-semibold uppercase">
        <AdvertDetailArticle advertId={id!} />
        <DeleteAdvertButton advertId={id!} />
      </main>
      <Footer />
    </>
  )
}
