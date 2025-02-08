interface Props extends React.ComponentProps<'button'> {
  buttonText: string
  onClick: () => void
}

export const FilterButton = ({ buttonText, onClick, type }: Props) => {
  return (
    <button
      type={type}
      className="block w-fit cursor-pointer rounded-2xl border-2 bg-zinc-800 px-3 py-1 font-bold text-zinc-200 uppercase transition-all duration-500 ease-in-out hover:scale-110 hover:bg-zinc-200 hover:text-zinc-800"
      onClick={onClick}
    >
      {buttonText}
    </button>
  )
}
