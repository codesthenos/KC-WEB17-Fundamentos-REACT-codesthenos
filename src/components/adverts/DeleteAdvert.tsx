import { deleteAdvert } from '../../pages/adverts/service'

export const DeleteAdvertButton = ({ advertId }: { advertId: string }) => {
  return (
    <button
      onClick={async () => {
        await deleteAdvert({ id: advertId })
      }}
    >
      DELETE
    </button>
  )
}
