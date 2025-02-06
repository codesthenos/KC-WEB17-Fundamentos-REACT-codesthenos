import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/authContext'
import { useState } from 'react'
import { login } from '../pages/auth/service'
import { LoadingSpinner } from './LoadingSpinner'

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<unknown>(null)

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

      await login({ email: formData.email, password: formData.password })
      onLogin()
      navigate(location.state?.from ?? '/', { replace: true })
    } catch (error) {
      //TODO
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  const isDisabled = isLoading || !formData.email || !formData.password
  return (
    <form
      onSubmit={handleSubmit}
      className="relative rounded-2xl border border-zinc-200 p-3"
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-zinc-900">
          <LoadingSpinner />
        </div>
      )}
      {error && <span className="text-red-500">{error}</span>}
      <div className="mb-2 flex items-center justify-between gap-x-1">
        <label htmlFor="email">Email</label>
        <input
          onChange={handleInputChange}
          value={formData.email}
          type="text"
          id="email"
          name="email"
          className="rounded-md border border-zinc-200 px-1"
        />
      </div>
      <div className="mb-4 flex items-center justify-between gap-x-1">
        <label htmlFor="password">Password</label>
        <input
          onChange={handleInputChange}
          value={formData.password}
          type="password"
          id="password"
          name="password"
          className="rounded-md border border-zinc-200 px-1"
        />
      </div>
      <button
        type="submit"
        className="cursor-pointer rounded-xl border border-zinc-200 px-3 py-1 uppercase transition-all duration-300 ease-in-out hover:bg-zinc-500 disabled:cursor-not-allowed disabled:bg-zinc-300"
        disabled={isDisabled}
      >
        login
      </button>
    </form>
  )
}
