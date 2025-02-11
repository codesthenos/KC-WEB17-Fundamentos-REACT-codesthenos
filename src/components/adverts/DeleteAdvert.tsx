import { useNavigate } from 'react-router-dom'
import { deleteAdvert } from '../../pages/adverts/service'
import { isApiClientError } from '../../api/client'
import { CustomModal } from './CustomModal'
import { ApiClientError } from '../../api/error'
import { useModalErrorLoading } from '../../contexts/modal-error-loading/modalErrorLoadingContext'

export const DeleteAdvertButton = ({ advertId }: { advertId: string }) => {
  const navigate = useNavigate()
  const {
    modalError,
    modalApplyError,
    modalClearError,
    modalLoading,
    modalApplyLoading,
    modalClearLoading
  } = useModalErrorLoading()

  const handleDelete = async () => {
    try {
      modalApplyLoading()
      await deleteAdvert({ id: advertId })
      navigate('/', { replace: true })
    } catch (error) {
      if (isApiClientError(error)) {
        modalApplyError({ error })
      } else {
        modalApplyError({ error: new ApiClientError('SOMETHING WENT WRONG') })
      }
    } finally {
      modalClearLoading()
    }
  }
  return (
    <CustomModal
      buttonText="DELETE"
      modalText1="PERMANENT"
      modalText2="DELETING"
      onConfirm={handleDelete}
      error={modalError?.message}
      isLoading={modalLoading}
      clearError={modalClearError}
    />
  )
}
