import { useNavigate } from 'react-router-dom'
import { storage } from '../../utils/storage'
import { CustomModal } from '../adverts/CustomModal'
import { useState } from 'react'
import { ApiClientError } from '../../api/error'
import { isApiClientError } from '../../api/client'

export const LogoutButton = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<ApiClientError | null>(null)

  const clearError = () => {
    setError(null)
  }
  const handleLogout = () => {
    try {
      setIsLoading(true)
      storage.remove({ key: 'auth' })
      navigate('/login')
    } catch (error) {
      if (isApiClientError(error)) {
        setError(error)
      } else {
        setError(new ApiClientError('SOMETHING WENT WRONG'))
      }
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <CustomModal
      buttonText="LOGOUT"
      modalText1="PROCEEDING TO"
      modalText2="LOGOUT"
      onConfirm={handleLogout}
      error={error?.message}
      isLoading={isLoading}
      clearError={clearError}
    />
  )
}
