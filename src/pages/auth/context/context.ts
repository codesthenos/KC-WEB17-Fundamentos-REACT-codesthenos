import { createContext, useContext } from 'react'

interface AuthContextI {
  isLogged: boolean
  onLogin: () => void
  onLogout: () => void
}

export const AuthContext = createContext<AuthContextI>({
  isLogged: false,
  onLogin: () => {},
  onLogout: () => {}
})

export const useAuth = () => {
  return useContext(AuthContext)
}
