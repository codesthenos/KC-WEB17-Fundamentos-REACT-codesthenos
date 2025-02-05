import {
  client,
  removeAuthorizationHeader,
  setAuthorizationHeader
} from '../../api/client'
import { storage } from '../../utils/storage'
import type { Credentials, Login } from './types'

export const login = async (credentials: Credentials) => {
  const response = await client.post<Login>('api/auth/login', credentials)
  const { accessToken } = response.data
  storage.set({ key: 'auth', value: accessToken })
  setAuthorizationHeader({ accessToken })
}

export const logout = async () => {
  storage.remove({ key: 'auth' })
  removeAuthorizationHeader()
}
