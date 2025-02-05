import { useState } from 'react'
import { AuthContext } from './context'

interface Props {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: Props) => {
  const [isLogged, setIsLogged] = useState(false)

  const authState = {
    isLogged,
    onLogin: () => setIsLogged(true),
    onLogout: () => setIsLogged(false)
  }

  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  )
}
