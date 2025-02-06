import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/authContext'
import { useState } from 'react'
import { login } from '../pages/auth/service'

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

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
      alert(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-zinc-200 p-3"
    >
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
        className="cursor-pointer rounded-xl border border-zinc-200 px-3 py-1 uppercase transition-all duration-300 ease-in-out hover:bg-zinc-500"
      >
        login
      </button>
    </form>
  )
}
