import { useRef, useState } from 'react'
import { Checkbox } from '../Checkbox'
import { FormField } from '../FormField'

export const NewAdvertForm = () => {
  const [formData, setFormData] = useState({ name: '', price: '' })
  const saleRef = useRef<HTMLInputElement>(null)
  const electronicsRef = useRef<HTMLInputElement>(null)
  const sportsRef = useRef<HTMLInputElement>(null)
  const motorRef = useRef<HTMLInputElement>(null)
  const lifestyleRef = useRef<HTMLInputElement>(null)

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

    const tagsList = [
      electronicsRef.current,
      sportsRef.current,
      motorRef.current,
      lifestyleRef.current
    ]

    const calculateTags = (tags: (HTMLInputElement | null)[]) => {
      return tags
        ? tags.filter((tag) => tag?.checked).map((tag) => tag?.name)
        : null
    }

    const newAdvert = {
      name: formData.name,
      sale: saleRef.current?.checked,
      price: +formData.price,
      tags: calculateTags(tagsList),
      image: 'TODO FILE IMAGE'
    }

    console.log(newAdvert)
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
      <Checkbox labelFor="sale" labelText="for sale" ref={saleRef} />
      <fieldset>
        <legend className="mb-1 text-left">TAGS</legend>
        <div className="mb-2 grid grid-cols-2">
          <div>
            <Checkbox
              ref={electronicsRef}
              labelFor="electronics"
              labelText="electronics"
            />
            <Checkbox ref={sportsRef} labelFor="sports" labelText="sports" />
          </div>
          <div>
            <Checkbox ref={motorRef} labelFor="motor" labelText="motor" />
            <Checkbox
              ref={lifestyleRef}
              labelFor="lifestyle"
              labelText="lifestyle"
            />
          </div>
        </div>
      </fieldset>
      <div className="mb-2 flex items-center justify-between gap-x-1">
        IMAGE
      </div>
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
