export interface Advert {
  name: string
  sale: string
  price: string
  tags: ('lifestyle' | 'mobile' | 'motor' | 'work')[]
  photo?: string
}
