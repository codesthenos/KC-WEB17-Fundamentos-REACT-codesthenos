export const Header = ({ pathName }: { pathName: string }) => {
  return (
    <header>
      <h1 className="mt-2 text-center text-4xl font-bold uppercase">
        {pathName} PAGE HEADER
      </h1>
    </header>
  )
}
