import { Footer } from '../../components/Footer'
import { LoginForm } from '../../components/LoginForm'

export const LoginPage = () => {
  return (
    <>
      <header>
        <h1 className="mt-2 text-center text-4xl font-bold">
          WALLAPOP CLONE LOGIN
        </h1>
      </header>
      <main className="mx-auto mt-16 flex max-w-3xl grow flex-col items-center text-center font-semibold uppercase">
        <LoginForm />
      </main>
      <Footer />
    </>
  )
}
