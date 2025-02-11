import { Navbar } from '../../components/adverts/Navbar'

export const NotFoundPage = () => {
  return (
    <>
      <Navbar />
      <h1 className="sr-only">Not Found Page</h1>
      <p className="my-16 text-center text-2xl font-bold text-pretty uppercase">
        The url provided doesnt make any match
      </p>
      <a
        href="https://codesthenos.github.io/CODESTHENOS-PORTFOLIO/"
        rel="noopener noreferrer"
        target="_blank"
        className="mx-auto mb-2 block w-fit rounded-2xl border-2 bg-zinc-200 px-3 py-1 font-bold text-zinc-800 uppercase transition-all duration-500 ease-in-out hover:scale-110 hover:bg-zinc-800 hover:text-zinc-200"
      >
        CODESTHENOS
      </a>
    </>
  )
}
