import { FilterForm } from './FilterForm'

export const FilterSection = () => {
  return (
    <section>
      <header className="mb-6">
        <h2 className="mt-8 text-center text-2xl font-semibold">
          FILTERS SECTION
        </h2>
      </header>
      <FilterForm />
    </section>
  )
}
