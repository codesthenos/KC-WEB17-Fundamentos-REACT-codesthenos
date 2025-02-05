import { useState } from 'react'
import { AuthContext } from './context'

interface Props {
  defaultIsLogged: boolean
  children: React.ReactNode
}

export const AuthProvider = ({ defaultIsLogged, children }: Props) => {
  const [isLogged, setIsLogged] = useState(defaultIsLogged)

  const authState = {
    isLogged,
    onLogin: () => setIsLogged(true),
    onLogout: () => setIsLogged(false)
  }

  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  )
}
