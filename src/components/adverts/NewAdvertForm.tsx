import { useRef, useState } from 'react'
import { Checkbox } from '../Checkbox'
import { FormField } from '../FormField'
import { createAdvert } from '../../pages/adverts/service'
import { Advert } from '../../pages/adverts/types'

export const NewAdvertForm = () => {
  const [formData, setFormData] = useState({ name: '', price: '' })
  const saleRef = useRef<HTMLInputElement>(null)
  const mobileRef = useRef<HTMLInputElement>(null)
  const workRef = useRef<HTMLInputElement>(null)
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

    interface Tag extends HTMLInputElement {
      name: 'motor' | 'lifestyle' | 'work' | 'mobile'
    }

    const tagsList: Tag[] = [
      mobileRef.current as Tag,
      workRef.current as Tag,
      motorRef.current as Tag,
      lifestyleRef.current as Tag
    ]

    const calculateTags = (tags: Tag[]) => {
      return tags
        ? tags.filter((tag) => tag?.checked).map((tag) => tag?.name)
        : []
    }

    const newAdvert = new FormData()
    newAdvert.append('name', formData.name)
    newAdvert.append('sale', saleRef.current!.checked ? 'true' : 'false')
    newAdvert.append('price', formData.price)
    calculateTags(tagsList).forEach((tag) => newAdvert.append('tags', tag!))
    if (photoRef.current && photoRef.current.files) {
      newAdvert.append('photo', photoRef.current.files[0])
    }

    const createdAdvert = await createAdvert({ advert: newAdvert })
    console.log(createdAdvert)
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
            <Checkbox ref={mobileRef} labelFor="mobile" labelText="mobile" />
            <Checkbox ref={workRef} labelFor="work" labelText="work" />
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
          PHOTO
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
