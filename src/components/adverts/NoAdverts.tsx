import { useAdverts } from '../../contexts/adverts/advertsContext'
import { CreateAdvertButton } from './CreateAdvertButton'

export const NoAdverts = () => {
  const { adverts } = useAdverts()

  const text = adverts.length
    ? 'Any advert matches the filters'
    : 'Create the first advert!'
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="font-semi my-8 text-center text-2xl">{text}</h3>
      <CreateAdvertButton />
    </div>
  )
}
