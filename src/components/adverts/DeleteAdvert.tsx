import { useNavigate } from 'react-router-dom'
import { deleteAdvert } from '../../pages/adverts/service'
import { isApiClientError } from '../../api/client'
import { CustomModal } from './CustomModal'
import { useErrorLoading } from '../../contexts/error-loading/errorLoadingContext'

export const DeleteAdvertButton = ({ advertId }: { advertId: string }) => {
  const navigate = useNavigate()
  const { error, applyError, clearError, loading, applyLoading, clearLoading } =
    useErrorLoading()

  const handleDelete = async () => {
    try {
      applyLoading()
      await deleteAdvert({ id: advertId })
      navigate('/', { replace: true })
    } catch (error) {
      if (isApiClientError(error)) {
        applyError({ error })
      }
    } finally {
      clearLoading()
    }
  }
  return (
    <CustomModal
      buttonText="DELETE"
      modalText1="PERMANENT"
      modalText2="DELETING"
      onConfirm={handleDelete}
      error={error?.message}
      isLoading={loading}
      clearError={clearError}
    />
  )
}
