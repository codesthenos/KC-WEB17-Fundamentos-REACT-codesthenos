import { ErrorHomeAnchor } from '../../components/errors/ErrorHomeAnchor'

export const DefaultErrorPage = () => {
  return (
    <article className="mx-auto mt-8 max-w-3xl">
      <h2 className="mb-4 text-center text-4xl font-bold">Ooooops!</h2>
      <p className="mb-2 text-center font-semibold">Something went wrong!</p>
      <h3 className="mb-4 text-center font-semibold">Try going home!</h3>
      <ErrorHomeAnchor />
    </article>
  )
}
