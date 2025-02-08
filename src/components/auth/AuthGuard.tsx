import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts/auth/authContext'

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { isLogged } = useAuth()
  const location = useLocation()

  return isLogged ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} replace />
  )
}
