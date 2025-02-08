import { storage } from '../../utils/storage'

export const LogoutButton = () => {
  const handleLogout = () => {
    storage.remove({ key: 'auth' })
  }
  return (
    <button
      type="button"
      onClick={handleLogout}
      className="w-fit cursor-pointer rounded-2xl border-2 bg-zinc-800 px-3 py-1 font-bold text-zinc-200 uppercase transition-all duration-500 ease-in-out hover:scale-110 hover:bg-zinc-200 hover:text-zinc-800"
    >
      LOGOUT
    </button>
  )
}
