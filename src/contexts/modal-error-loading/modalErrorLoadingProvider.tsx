import { type ReactNode, useState } from 'react'
import { ApiClientError } from '../../api/error'
import { ModalErrorLoadingContext } from './modalErrorLoadingContext'

export const ModalErrorLoadingProvider = ({
  children
}: {
  children: ReactNode
}) => {
  const [modalLoading, setModalLoading] = useState(false)
  const [modalError, setModalError] = useState<ApiClientError | null>(null)

  const modalApplyError = ({ error }: { error: ApiClientError }) => {
    setModalError(error)
  }
  const modalClearError = () => {
    setModalError(null)
  }

  const modalApplyLoading = () => {
    setModalLoading(true)
  }
  const modalClearLoading = () => {
    setModalLoading(false)
  }

  const modalErrorLoadingState = {
    modalError,
    modalApplyError,
    modalClearError,
    modalLoading,
    modalApplyLoading,
    modalClearLoading
  }
  return (
    <ModalErrorLoadingContext.Provider value={modalErrorLoadingState}>
      {children}
    </ModalErrorLoadingContext.Provider>
  )
}
