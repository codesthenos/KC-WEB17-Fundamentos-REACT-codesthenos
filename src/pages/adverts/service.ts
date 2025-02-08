import { client } from '../../api/client'
import { advertSchema, type Advert } from './types'

const advertsUrl = '/v1/adverts'

export const getAdverts = async () => {
  const response = await client.get<Advert[]>(advertsUrl)
  if (response.data.length) {
    advertSchema.parse(response.data[0])
  }
  return response.data
}

export const createAdvert = async ({ advert }: { advert: FormData }) => {
  const response = await client.post<Advert>(advertsUrl, advert)
  advertSchema.parse(response.data)
  return response.data
}

export const getAdvert = async ({ id }: { id: string }) => {
  const url = `${advertsUrl}/${id}`
  const response = await client.get<Advert>(url)
  advertSchema.parse(response.data)
  return response.data
}

export const deleteAdvert = async ({ id }: { id: string }) => {
  const url = `${advertsUrl}/${id}`
  const response = await client.delete<Advert>(url)
  return response.data
}
