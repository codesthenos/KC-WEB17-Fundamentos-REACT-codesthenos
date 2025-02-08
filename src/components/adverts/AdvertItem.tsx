import type { Advert } from '../../pages/adverts/types'

export const AdvertItem = ({ advert }: { advert: Advert }) => {
  return (
    <li>
      <a href={`/adverts/${advert.id}`}>
        <article>
          <header>
            <h3>{advert.name}</h3>
          </header>
          <p>{advert.price}$</p>
          <h4>ON {advert.sale ? 'SALE' : 'DEMAND'}</h4>
          <footer>
            <ul>
              {advert.tags.map((tag) => (
                <li key={tag}>
                  <span>{tag}</span>
                </li>
              ))}
            </ul>
          </footer>
        </article>
      </a>
    </li>
  )
}
