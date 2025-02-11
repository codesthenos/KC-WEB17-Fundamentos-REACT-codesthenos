import { useNavigate } from 'react-router-dom'
import { storage } from '../../utils/storage'
import { CustomModal } from '../adverts/CustomModal'
import { ApiClientError } from '../../api/error'
import { isApiClientError } from '../../api/client'
import { useErrorLoading } from '../../contexts/error-loading/errorLoadingContext'

export const LogoutButton = () => {
  const navigate = useNavigate()
  const { error, applyError, clearError, loading, applyLoading, clearLoading } =
    useErrorLoading()

  const handleLogout = () => {
    try {
      applyLoading()
      storage.remove({ key: 'auth' })
      navigate('/login')
    } catch (error) {
      if (isApiClientError(error)) {
        applyError({ error })
      } else {
        applyError({ error: new ApiClientError('SOMETHING WENT WRONG') })
      }
    } finally {
      clearLoading()
    }
  }
  return (
    <CustomModal
      buttonText="LOGOUT"
      modalText1="PROCEEDING TO"
      modalText2="LOGOUT"
      onConfirm={handleLogout}
      error={error?.message}
      isLoading={loading}
      clearError={clearError}
    />
  )
}
