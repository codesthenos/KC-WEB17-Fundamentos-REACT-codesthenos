import { useNavigate } from 'react-router-dom'
import { storage } from '../../utils/storage'
import { CustomModal } from '../adverts/CustomModal'
import { ApiClientError } from '../../api/error'
import { isApiClientError } from '../../api/client'
import { useModalErrorLoading } from '../../contexts/modal-error-loading/modalErrorLoadingContext'

export const LogoutButton = () => {
  const navigate = useNavigate()
  const {
    modalError,
    modalApplyError,
    modalClearError,
    modalLoading,
    modalApplyLoading,
    modalClearLoading
  } = useModalErrorLoading()

  const handleLogout = () => {
    try {
      modalClearError()
      modalApplyLoading()
      storage.remove({ key: 'auth' })
      navigate('/login')
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
      buttonText="LOGOUT"
      modalText1="PROCEEDING TO"
      modalText2="LOGOUT"
      onConfirm={handleLogout}
      error={modalError?.message}
      isLoading={modalLoading}
      clearError={modalClearError}
    />
  )
}
