import type { Advert } from '../../pages/adverts/types'
import { DeleteAdvertButton } from './DeleteAdvert'

export const AdvertItem = ({ advert }: { advert: Advert }) => {
  return (
    <li>
      <h3>{advert.name}</h3>
      <h3>{advert.price}</h3>
      <DeleteAdvertButton advertId={advert.id} />
    </li>
  )
}
