export const Header = ({ pathName }: { pathName: string }) => {
  return (
    <header>
      <h1 className="text-center text-4xl font-bold uppercase">
        {pathName} PAGE HEADER
      </h1>
    </header>
  )
}
