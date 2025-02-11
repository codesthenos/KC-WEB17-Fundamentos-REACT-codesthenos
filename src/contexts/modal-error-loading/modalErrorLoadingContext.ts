import { createContext, useContext } from 'react'
import type { ApiClientError } from '../../api/error'

interface ModalErrorLoadingContextI {
  modalError: ApiClientError | null
  modalApplyError: ({ error }: { error: ApiClientError }) => void
  modalClearError: () => void
  modalLoading: boolean | null
  modalApplyLoading: () => void
  modalClearLoading: () => void
}

export const ModalErrorLoadingContext =
  createContext<ModalErrorLoadingContextI>({
    modalError: null,
    modalApplyError: () => {},
    modalClearError: () => {},
    modalLoading: null,
    modalApplyLoading: () => {},
    modalClearLoading: () => {}
  })

export const useModalErrorLoading = () => {
  return useContext(ModalErrorLoadingContext)
}
