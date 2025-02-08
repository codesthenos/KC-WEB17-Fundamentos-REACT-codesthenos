import z from 'zod'

export const advertSchema = z.object({
  createdAt: z.string({ required_error: 'createdAt not provided' }),
  id: z.string({ required_error: 'id not provided' }),
  name: z.string({ required_error: 'Not string name provided' }),
  sale: z.boolean({ required_error: 'Not boolean sale provided' }),
  price: z.number({ required_error: 'Not numeric price provided' }),
  tags: z.array(z.enum(['lifestyle', 'motor', 'mobile', 'work']), {
    required_error: 'Not a valid tags value'
  }),
  photo: z.string({ required_error: 'photo is not a string' }).optional()
})

export type Advert = z.infer<typeof advertSchema>

export interface Tag extends HTMLInputElement {
  name: 'motor' | 'lifestyle' | 'work' | 'mobile'
}
