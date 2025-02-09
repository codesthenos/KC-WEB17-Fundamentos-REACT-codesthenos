import { AdvertsList } from '../../components/adverts/AdvertsList'
import { FilterSection } from '../../components/adverts/FilterSection'
import { AdvertsProvider } from '../../contexts/adverts/AdvertsProvider'
import { FiltersProvider } from '../../contexts/filters/FiltersProvider'

export const AdvertsPage = () => {
  return (
    <FiltersProvider>
      <FilterSection />
      <main className="mx-auto mt-16 mb-4 flex max-w-3xl grow flex-col items-center text-center font-semibold uppercase">
        <AdvertsProvider>
          <AdvertsList />
        </AdvertsProvider>
      </main>
    </FiltersProvider>
  )
}
