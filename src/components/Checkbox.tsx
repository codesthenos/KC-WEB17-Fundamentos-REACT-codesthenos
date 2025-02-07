import { forwardRef } from 'react'

interface Props extends React.ComponentProps<'input'> {
  labelFor: string
  labelText: string
}

export const Checkbox = forwardRef<HTMLInputElement, Props>(
  ({ labelFor, labelText }, ref) => {
    return (
      <div className="mb-2 flex items-center justify-between gap-x-1">
        <label htmlFor={labelFor} className="cursor-pointer uppercase">
          {labelText}
        </label>
        <input
          type="checkbox"
          id={labelFor}
          name={labelFor}
          className="cursor-pointer"
          ref={ref}
        />
      </div>
    )
  }
)
