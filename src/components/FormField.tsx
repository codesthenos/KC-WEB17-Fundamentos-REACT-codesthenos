interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  labelFor: string
  labelText: string
  type: string
}

export const FormField = ({
  onChange,
  value,
  labelFor,
  labelText,
  type
}: Props) => {
  return (
    <div className="mb-2 flex items-center justify-between gap-x-1">
      <label htmlFor={labelFor} className="cursor-pointer uppercase">
        {labelText}
      </label>
      <input
        onChange={onChange}
        value={value}
        type={type}
        id={labelFor}
        name={labelFor}
        className="rounded-md border border-zinc-200 px-1"
      />
    </div>
  )
}
