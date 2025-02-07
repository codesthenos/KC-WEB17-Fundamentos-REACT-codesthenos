import { useRef, useState } from 'react'
import { Checkbox } from '../Checkbox'
import { FormField } from '../FormField'

export const NewAdvertForm = () => {
  const [formData, setFormData] = useState({ name: '', price: '' })
  const checkboxRef = useRef<HTMLInputElement>(null)

  const isDisabled = !formData.name || !formData.price

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()

    setFormData((state) => ({
      ...state,
      [event.target.id]: event.target.value
    }))
  }
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const newAdvert = {
      name: formData.name,
      sale: checkboxRef.current?.checked,
      tags: 'TODO ARRAY TAGS',
      price: +formData.price,
      image: 'TODO FILE IMAGE'
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="relative rounded-2xl border border-zinc-200 p-3"
    >
      <FormField
        onChange={handleInputChange}
        value={formData.name}
        labelFor="name"
        labelText="advert name"
        type="text"
      />
      <FormField
        onChange={handleInputChange}
        value={formData.price}
        labelFor="price"
        labelText="advert price"
        type="number"
      />
      <Checkbox labelFor="sale" labelText="for sale" ref={checkboxRef} />
      <button
        type="submit"
        className="cursor-pointer rounded-xl border border-zinc-200 px-3 py-1 uppercase transition-all duration-300 ease-in-out hover:bg-zinc-500 disabled:cursor-not-allowed disabled:bg-zinc-300"
        disabled={isDisabled}
      >
        create advert
      </button>
    </form>
  )
}
