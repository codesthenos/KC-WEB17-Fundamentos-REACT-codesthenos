import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/auth/authContext'
import { useRef, useState } from 'react'
import { login } from '../pages/auth/service'
import { LoadingSpinner } from './LoadingSpinner'
import { storage } from '../utils/storage'
import { FormField } from './FormField'
import { Checkbox } from './Checkbox'
import { isApiClientError } from '../api/client'
import { ApiClientError } from '../api/error'

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<ApiClientError | null>(null)

  const checkboxRef = useRef<HTMLInputElement>(null)

  const location = useLocation()
  const navigate = useNavigate()

  const { onLogin } = useAuth()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()

    setFormData((state) => ({
      ...state,
      [event.target.id]: event.target.value
    }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      setIsLoading(true)

      const { accessToken } = await login({
        email: formData.email,
        password: formData.password
      })
      if (checkboxRef.current?.checked) {
        storage.set({ key: 'auth', value: accessToken })
      }
      onLogin()
      navigate(location.state?.from ?? '/', { replace: true })
    } catch (error) {
      if (isApiClientError(error)) {
        setError(error)
      }
    } finally {
      setIsLoading(false)
    }
  }
  const isDisabled = isLoading || !formData.email || !formData.password
  return (
    <>
      {error && (
        <span className="mb-3 block text-red-500">{error.message}</span>
      )}
      <form
        onSubmit={handleSubmit}
        className="relative rounded-2xl border border-zinc-200 p-3"
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-zinc-900">
            <LoadingSpinner />
          </div>
        )}
        <FormField
          onChange={handleInputChange}
          value={formData.email}
          labelFor="email"
          labelText="Email"
          type="text"
        />
        <FormField
          onChange={handleInputChange}
          value={formData.password}
          labelFor="password"
          labelText="Password"
          type="password"
        />
        <Checkbox
          labelFor="rememberPass"
          labelText="remember password"
          ref={checkboxRef}
        />
        <button
          type="submit"
          className="cursor-pointer rounded-xl border border-zinc-200 px-3 py-1 uppercase transition-all duration-300 ease-in-out hover:bg-zinc-500 disabled:cursor-not-allowed disabled:bg-zinc-300"
          disabled={isDisabled}
        >
          login
        </button>
      </form>
    </>
  )
}
