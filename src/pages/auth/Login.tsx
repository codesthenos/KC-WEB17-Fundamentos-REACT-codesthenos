import { LoginForm } from '../../components/LoginForm'

export const LoginPage = () => {
  return (
    <>
      <header>
        <h1 className="text-center text-4xl font-bold">LOGIN PAGE HEADER</h1>
      </header>
      <main className="mx-auto my-8 flex max-w-3xl flex-col items-center justify-center text-center font-semibold uppercase">
        <LoginForm />
      </main>
      <footer>
        <p className="text-center">Made with love by codesthenos | 2025</p>
      </footer>
    </>
  )
}
