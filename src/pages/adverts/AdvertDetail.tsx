import { useParams } from 'react-router-dom'
import { DeleteAdvertButton } from '../../components/adverts/DeleteAdvert'
import { AdvertDetailArticle } from '../../components/adverts/AdvertDetailArticle'
import { ModalErrorLoadingProvider } from '../../contexts/modal-error-loading/modalErrorLoadingProvider'

export const AdvertDetailPage = () => {
  const { id } = useParams()

  return (
    <>
      <main className="relative mx-auto mt-16 flex max-w-3xl grow flex-col items-center text-center font-semibold uppercase">
        <AdvertDetailArticle advertId={id!} />
        <ModalErrorLoadingProvider>
          <DeleteAdvertButton advertId={id!} />
        </ModalErrorLoadingProvider>
      </main>
    </>
  )
}
