import { useNavigate } from 'react-router-dom'
import { deleteAdvert } from '../../pages/adverts/service'
import { useRef } from 'react'
import { isApiClientError } from '../../api/client'

export const DeleteAdvertButton = ({ advertId }: { advertId: string }) => {
  const modalRef = useRef<HTMLDialogElement>(null)
  const navigate = useNavigate()

  const handleOpenModal = () => {
    modalRef.current?.showModal()
  }
  const handleCloseModal = () => {
    modalRef.current?.close()
  }

  const handleConfirm = () => {
    handleDelete()
    handleCloseModal()
  }

  const handleCancel = () => {
    handleCloseModal()
  }

  const handleDelete = async () => {
    try {
      await deleteAdvert({ id: advertId })
      navigate('/', { replace: true })
    } catch (error) {
      if (isApiClientError(error)) {
        navigate('/')
      }
    }
  }
  return (
    <>
      <button
        className="block w-fit cursor-pointer rounded-2xl border-2 bg-zinc-800 px-3 py-1 font-bold text-zinc-200 uppercase transition-all duration-500 ease-in-out hover:scale-110 hover:bg-zinc-200 hover:text-zinc-800"
        onClick={handleOpenModal}
      >
        DELETE
      </button>
      <dialog
        ref={modalRef}
        className="mx-auto mt-85 rounded-xl bg-zinc-700 px-10 py-6 text-zinc-200 sm:min-w-sm"
      >
        <form method="dialog">
          <p>
            PERMANENT <span className="text-red-500">DELETING</span>.
          </p>
          <p className="mb-12">ARE YOU SURE?</p>
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={handleConfirm}
              className="block w-fit cursor-pointer rounded-2xl border-2 bg-zinc-800 px-3 py-1 font-bold text-zinc-200 uppercase transition-all duration-500 ease-in-out hover:scale-110 hover:bg-zinc-200 hover:text-zinc-800"
            >
              Confirm
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="block w-fit cursor-pointer rounded-2xl border-2 bg-zinc-200 px-3 py-1 font-bold text-zinc-800 uppercase transition-all duration-500 ease-in-out hover:scale-110 hover:bg-zinc-800 hover:text-zinc-200"
            >
              Dismiss
            </button>
          </div>
        </form>
      </dialog>
    </>
  )
}
