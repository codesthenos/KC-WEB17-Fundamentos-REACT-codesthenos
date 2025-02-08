import { useNavigate } from 'react-router-dom'
import { deleteAdvert } from '../../pages/adverts/service'
import { isApiClientError } from '../../api/client'
import { CustomModal } from './CustomModal'

export const DeleteAdvertButton = ({ advertId }: { advertId: string }) => {
  const navigate = useNavigate()

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
    <CustomModal
      buttonText="DELETE"
      modalText1="PERMANENT"
      modalText2="DELETING"
      onConfirm={handleDelete}
    />
  )
}
