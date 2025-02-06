import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/authContext'
import { useState } from 'react'
import { login } from '../pages/auth/service'

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
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

      await login({ username: formData.username, password: formData.password })
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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          onChange={handleInputChange}
          value={formData.username}
          type="text"
          id="username"
          name="username"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          onChange={handleInputChange}
          value={formData.password}
          type="password"
          id="password"
          name="password"
        />
      </div>
      <button type="submit">login</button>
    </form>
  )
}
