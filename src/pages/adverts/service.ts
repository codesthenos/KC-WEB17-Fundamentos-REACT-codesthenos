import { client } from '../../api/client'
import type { Advert } from './types'

const advertsUrl = '/v1/adverts'

export const getAdverts = async () => {
  const response = await client.get<Advert[]>(advertsUrl)
  return response.data
}

export const createAdvert = async ({ advert }: { advert: FormData }) => {
  const response = await client.post<Advert>(advertsUrl, advert)
  return response.data
}

export const getAdvert = async ({ id }: { id: string }) => {
  const url = `${advertsUrl}/${id}`
  const response = await client.get<Advert>(url)
  return response.data
}
// REVIEW
export const deleteAdvert = async ({ id }: { id: string }) => {
  const url = `${advertsUrl}/${id}`
  const response = await client.delete<Advert>(url)
  return response.data
}
