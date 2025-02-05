export interface Advert {
  name: string
  sale: boolean
  price: number
  tags: ('lifestyle' | 'mobile' | 'motor' | 'work')[]
  photo?: File
}
