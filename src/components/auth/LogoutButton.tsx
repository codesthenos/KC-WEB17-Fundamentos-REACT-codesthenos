import { useNavigate } from 'react-router-dom'
import { storage } from '../../utils/storage'
import { CustomModal } from '../adverts/CustomModal'

export const LogoutButton = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    storage.remove({ key: 'auth' })
    navigate('/login')
  }
  return (
    <CustomModal
      buttonText="LOGOUT"
      modalText1="PROCEEDING TO"
      modalText2="LOGOUT"
      onConfirm={handleLogout}
    />
  )
}
