import { Navbar } from './Navbar'

export const Header = ({ pathName }: { pathName: string }) => {
  return (
    <header>
      <h1 className="sr-only mt-2 text-center text-4xl font-bold uppercase">
        {pathName} PAGE
      </h1>
      <Navbar />
    </header>
  )
}
