import { type ReactNode, useState } from 'react'
import { ApiClientError } from '../../api/error'
import { ErrorLoadingContext } from './errorLoadingContext'

export const ErrorLoadingProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<ApiClientError | null>(null)

  const applyError = ({ error }: { error: ApiClientError }) => {
    setError(error)
  }
  const clearError = () => {
    setError(null)
  }

  const applyLoading = () => {
    setLoading(true)
  }
  const clearLoading = () => {
    setLoading(false)
  }

  const errorLoadingState = {
    error,
    applyError,
    clearError,
    loading,
    applyLoading,
    clearLoading
  }
  return (
    <ErrorLoadingContext.Provider value={errorLoadingState}>
      {children}
    </ErrorLoadingContext.Provider>
  )
}
