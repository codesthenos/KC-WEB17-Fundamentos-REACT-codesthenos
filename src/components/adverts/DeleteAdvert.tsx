import { useNavigate } from 'react-router-dom'
import { deleteAdvert } from '../../pages/adverts/service'
import { isApiClientError } from '../../api/client'
import { CustomModal } from './CustomModal'
import { useState } from 'react'
import type { ApiClientError } from '../../api/error'

export const DeleteAdvertButton = ({ advertId }: { advertId: string }) => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<ApiClientError | null>(null)

  const clearError = () => {
    setError(null)
  }
  const handleDelete = async () => {
    try {
      setIsLoading(true)
      await deleteAdvert({ id: advertId })
      navigate('/', { replace: true })
    } catch (error) {
      if (isApiClientError(error)) {
        setError(error)
      }
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <CustomModal
      buttonText="DELETE"
      modalText1="PERMANENT"
      modalText2="DELETING"
      onConfirm={handleDelete}
      error={error?.message}
      isLoading={isLoading}
      clearError={clearError}
    />
  )
}
