import { CreateAdvertButton } from './CreateAdvertButton'

export const NoAdverts = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="font-semi my-8 text-center text-2xl">
        Create the first advert!
      </h3>
      <CreateAdvertButton />
    </div>
  )
}
