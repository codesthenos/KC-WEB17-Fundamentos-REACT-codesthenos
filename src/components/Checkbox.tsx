import { forwardRef } from 'react'

interface Props extends React.ComponentProps<'input'> {
  labelFor: string
  labelText: string
}

export const Checkbox = forwardRef<HTMLInputElement, Props>(
  ({ labelFor, labelText, onClick }, ref) => {
    return (
      <div className="mb-2 flex items-center gap-x-4">
        <label
          htmlFor={labelFor}
          className="cursor-pointer font-semibold uppercase"
        >
          {labelText}
        </label>
        <input
          type="checkbox"
          id={labelFor}
          name={labelFor}
          className="cursor-pointer"
          ref={ref}
          onClick={onClick}
        />
      </div>
    )
  }
)
