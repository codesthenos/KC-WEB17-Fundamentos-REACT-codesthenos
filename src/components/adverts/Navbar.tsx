import { NavLink } from 'react-router-dom'
import { LogoutButton } from '../auth/LogoutButton'
import { useErrorLoading } from '../../contexts/error-loading/errorLoadingContext'
import { ModalErrorLoadingProvider } from '../../contexts/modal-error-loading/modalErrorLoadingProvider'

export const Navbar = () => {
  const { clearError } = useErrorLoading()

  const handleCLick = () => {
    clearError()
  }
  return (
    <nav className="mt-4 flex items-center justify-center gap-x-4">
      <div>
        <NavLink
          onClick={handleCLick}
          to="/adverts"
          className={({ isActive }) =>
            isActive
              ? 'disabled pointer-events-none block w-fit rounded-2xl border-2 bg-zinc-200 px-3 py-1 font-bold text-zinc-800 uppercase'
              : 'block w-fit rounded-2xl border-2 bg-zinc-800 px-3 py-1 font-bold text-zinc-200 uppercase transition-all duration-500 ease-in-out hover:scale-110 hover:bg-zinc-200 hover:text-zinc-800'
          }
          end
        >
          HOME
        </NavLink>
      </div>
      <div>
        <NavLink
          onClick={handleCLick}
          to="/adverts/new"
          className={({ isActive }) =>
            isActive
              ? 'disabled pointer-events-none block w-fit rounded-2xl border-2 bg-zinc-200 px-3 py-1 font-bold text-zinc-800 uppercase'
              : 'block w-fit rounded-2xl border-2 bg-zinc-800 px-3 py-1 font-bold text-zinc-200 uppercase transition-all duration-500 ease-in-out hover:scale-110 hover:bg-zinc-200 hover:text-zinc-800'
          }
          end
        >
          NEW ADVERT
        </NavLink>
      </div>
      <ModalErrorLoadingProvider>
        <LogoutButton />
      </ModalErrorLoadingProvider>
    </nav>
  )
}
