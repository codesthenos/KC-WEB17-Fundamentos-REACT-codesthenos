import { useParams } from 'react-router-dom'

export const AdvertDetailPage = () => {
  const { id } = useParams()
  return (
    <h1 className="text-center text-6xl font-bold uppercase">
      Advert Detail Page | id: {id} |
    </h1>
  )
}
