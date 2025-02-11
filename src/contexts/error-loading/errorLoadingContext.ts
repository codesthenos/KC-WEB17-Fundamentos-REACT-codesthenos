import { createContext, useContext } from 'react'
import type { ApiClientError } from '../../api/error'

interface ErrorLoadingContextI {
  error: ApiClientError | null
  applyError: ({ error }: { error: ApiClientError }) => void
  clearError: () => void
  loading: boolean | null
  applyLoading: () => void
  clearLoading: () => void
}

export const ErrorLoadingContext = createContext<ErrorLoadingContextI>({
  error: null,
  applyError: () => {},
  clearError: () => {},
  loading: null,
  applyLoading: () => {},
  clearLoading: () => {}
})

export const useErrorLoading = () => {
  return useContext(ErrorLoadingContext)
}
