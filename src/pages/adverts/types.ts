import z from 'zod'

const noHTMLRegExp = /<[^>]*>/g

export const advertSchema = z.object({
  createdAt: z
    .string({ required_error: 'createdAt not provided' })
    .refine((value) => !noHTMLRegExp.test(value), {
      message: 'HTML tags are not allowed'
    }),
  id: z
    .string({ required_error: 'id not provided' })
    .refine((value) => !noHTMLRegExp.test(value), {
      message: 'HTML tags are not allowed'
    }),
  name: z
    .string({ required_error: 'Not string name provided' })
    .min(3, { message: 'name has to be at least 3 characters' })
    .max(50, { message: 'name cannot have more than 50 characters' })
    .refine((value) => !noHTMLRegExp.test(value), {
      message: 'HTML tags are not allowed'
    }),
  sale: z.boolean({ required_error: 'Not boolean sale provided' }),
  price: z.number({ required_error: 'Not numeric price provided' }),
  tags: z.array(z.enum(['lifestyle', 'motor', 'mobile', 'work']), {
    required_error: 'Not a valid tags value'
  }),
  photo: z
    .string({ required_error: 'photo is not a string' })
    .refine((value) => !noHTMLRegExp.test(value), {
      message: 'HTML tags are not allowed'
    })
    .optional()
})

export type Advert = z.infer<typeof advertSchema>

export interface Tag extends HTMLInputElement {
  name: 'motor' | 'lifestyle' | 'work' | 'mobile'
}
