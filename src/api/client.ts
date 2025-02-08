import axios, { isAxiosError } from 'axios'
import { ApiClientError } from './error'

export const client = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
})
// error interceptor
client.interceptors.response.use(undefined, (error) => {
  // Default Error
  const clientError = new ApiClientError('Default API client Error')

  if (error instanceof Error) {
    clientError.message = error.message
    if (isAxiosError<{ message: string }>(error)) {
      clientError.message =
        error.response?.data.message ??
        error.response?.statusText ??
        clientError.message
      const errorCode = error.code
      const errorStatus = error.response?.status ?? error.status
      if (errorCode === 'ERR_NETWORK') {
        clientError.code = 'NETWORK_ERROR'
      }
      if (typeof errorStatus === 'number') {
        if (errorStatus === 401) {
          clientError.code = 'UNAUTHORIZED'
        } else if (errorStatus === 404) {
          clientError.code = 'NOT_FOUND'
        } else if (errorStatus >= 500) {
          clientError.code = 'SERVER_ERROR'
        }
      }
    }
    // else if zodError...
  }
  return Promise.reject(clientError)
})

export const isApiClientError = (error: unknown) => {
  return error instanceof ApiClientError
}

export const setAuthorizationHeader = ({
  accessToken
}: {
  accessToken: string
}) => {
  client.defaults.headers['Authorization'] = `Bearer ${accessToken}`
}

export const removeAuthorizationHeader = () => {
  delete client.defaults.headers['Authorization']
}
