import { useNavigate } from 'react-router-dom'
import { deleteAdvert } from '../../pages/adverts/service'

export const DeleteAdvertButton = ({ advertId }: { advertId: string }) => {
  const navigate = useNavigate()
  return (
    <button
      className="block w-fit cursor-pointer rounded-2xl border-2 bg-zinc-200 px-3 py-1 font-bold text-zinc-800 uppercase transition-all duration-500 ease-in-out hover:scale-110 hover:bg-zinc-800 hover:text-zinc-200"
      onClick={async () => {
        await deleteAdvert({ id: advertId })
        navigate('/', { replace: true })
      }}
    >
      DELETE
    </button>
  )
}
