import { Header } from '../components/adverts/Header'
import { Footer } from '../components/Footer'

export const AdvertLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
