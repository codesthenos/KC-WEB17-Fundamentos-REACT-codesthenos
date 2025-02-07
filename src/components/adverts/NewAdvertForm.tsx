import { useRef, useState } from 'react'
import { Checkbox } from '../Checkbox'
import { FormField } from '../FormField'
import { getPlaceholderFile } from '../../utils/placeholderFile'

export const NewAdvertForm = () => {
  const [formData, setFormData] = useState({ name: '', price: '' })
  const saleRef = useRef<HTMLInputElement>(null)
  const electronicsRef = useRef<HTMLInputElement>(null)
  const sportsRef = useRef<HTMLInputElement>(null)
  const motorRef = useRef<HTMLInputElement>(null)
  const lifestyleRef = useRef<HTMLInputElement>(null)
  const photoRef = useRef<HTMLInputElement>(null)

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

    const calculatePhoto = (photo?: HTMLInputElement | null) => {
      if (!photo || !photo.files?.length) {
        return getPlaceholderFile()
      }
      return photo.files[0]
    }

    const newAdvert = {
      name: formData.name,
      sale: saleRef.current?.checked,
      price: +formData.price,
      tags: calculateTags(tagsList),
      photo: await calculatePhoto(photoRef.current)
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
      <div className="mb-4 flex gap-x-4">
        <label htmlFor="photo" className="cursor-pointer">
          IMAGE
        </label>
        <input
          accept="image/png, image/jpeg, image/jpg, image/webp"
          type="file"
          id="photo"
          ref={photoRef}
          className="max-w-48 cursor-pointer overflow-hidden text-zinc-400"
        />
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
