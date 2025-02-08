import {
  client,
  removeAuthorizationHeader,
  setAuthorizationHeader
} from '../../api/client'
import { storage } from '../../utils/storage'
import { loginResponseSchema, type Credentials, type Login } from './types'

export const login = async (credentials: Credentials) => {
  const response = await client.post<Login>('/auth/login', credentials)
  loginResponseSchema.parse(response.data)
  const { accessToken } = response.data
  setAuthorizationHeader({ accessToken })
  return { accessToken }
}

export const logout = async () => {
  // TODO CONFIRM BEFORE LOG OUT
  storage.remove({ key: 'auth' })
  removeAuthorizationHeader()
}
