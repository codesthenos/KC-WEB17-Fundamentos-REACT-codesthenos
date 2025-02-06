import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { AdvertsPage } from './pages/adverts/Adverts'
import { AdvertDetailPage } from './pages/adverts/AdvertDetail'
import { NewAdvertPage } from './pages/adverts/NewAdvert'
import { LoginPage } from './pages/auth/Login'
import { NotFoundPage } from './pages/NotFound'
import { AuthGuard } from './components/auth/AuthGuard'

function App() {
  return (
    <>
      <h1 className="border-8 border-amber-600 bg-zinc-200 text-center text-xl font-bold">
        CODESTHENOS READY TO START
      </h1>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/adverts"
          element={
            <AuthGuard>
              <Outlet />
            </AuthGuard>
          }
        >
          <Route index element={<AdvertsPage />} />
          <Route path=":id" element={<AdvertDetailPage />} />
          <Route path="new" element={<NewAdvertPage />} />
        </Route>
        <Route path="/" element={<Navigate to="/adverts" />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </>
  )
}

export default App
