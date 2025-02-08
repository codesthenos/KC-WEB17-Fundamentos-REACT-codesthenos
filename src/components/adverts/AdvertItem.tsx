import type { Advert } from '../../pages/adverts/types'

export const AdvertItem = ({ advert }: { advert: Advert }) => {
  return (
    <li className="relative rounded-xl border border-zinc-200 px-4 py-2">
      <a href={`/adverts/${advert.id}`} className="block h-full">
        <article className="flex h-full flex-col gap-y-1.5">
          <header>
            <h3>{advert.name}</h3>
          </header>
          <p>{advert.price}$</p>
          <h4>ON {advert.sale ? 'SALE' : 'DEMAND'}</h4>
          <footer className="relative grow">
            <ul className="flex h-full flex-col justify-end">
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
