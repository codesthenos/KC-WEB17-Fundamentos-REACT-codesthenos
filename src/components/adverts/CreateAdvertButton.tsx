import { Link } from 'react-router-dom'

export const CreateAdvertButton = () => {
  return (
    <Link
      to="/adverts/new"
      className="block w-fit rounded-2xl border-2 bg-zinc-200 px-3 py-1 font-bold text-zinc-800 uppercase transition-all duration-500 ease-in-out hover:scale-110 hover:bg-zinc-800 hover:text-zinc-200"
    >
      New advert
    </Link>
  )
}
