import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/auth/AuthProvider.tsx'
import { storage } from './utils/storage.ts'
import { setAuthorizationHeader } from './api/client.ts'
import { ErrorBoundary } from './components/errors/ErrorBoundary.tsx'

const accessToken = storage.get({ key: 'auth' })
if (accessToken) {
  setAuthorizationHeader({ accessToken })
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <AuthProvider defaultIsLogged={!!accessToken}>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
)
