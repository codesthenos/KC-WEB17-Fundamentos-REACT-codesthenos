import z from 'zod'

export const loginResponseSchema = z.object({
  accessToken: z.string({ required_error: 'No token in response' })
})

export const credentialsSchema = z.object({
  email: z
    .string({
      required_error: 'Provide an email'
    })
    .email({
      message: 'Invalid email'
    }),
  password: z
    .string({
      required_error: 'Provide a password'
    })
    .min(4, {
      message: 'Password must be at least 4 characters'
    })
})

export type Login = z.infer<typeof loginResponseSchema>

export type Credentials = z.infer<typeof credentialsSchema>
