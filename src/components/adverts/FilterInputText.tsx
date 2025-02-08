import { forwardRef } from 'react'

interface Props extends React.ComponentProps<'input'> {
  inputId: string
  labelText: string
}

export const FilterInputText = forwardRef<HTMLInputElement, Props>(
  ({ inputId, labelText }, ref) => {
    return (
      <div className="mb-4 flex items-center gap-x-2">
        <label
          htmlFor={inputId}
          className="cursor-pointer font-semibold uppercase"
        >
          {labelText}
        </label>
        <input
          ref={ref}
          type="text"
          id={inputId}
          name={inputId}
          className="rounded-md border border-zinc-200 px-1"
        />
      </div>
    )
  }
)
