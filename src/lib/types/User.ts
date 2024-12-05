import { z } from "zod"

export const registerFormSchema = z.object({
    username: z.string().min(3),
    email: z.string().email(),
    number: z.string().length(10)
})

export const loginFormSchema = z.object({
    emailOrMobile: z.string().email(),
})

export type registerFormType = z.infer<typeof registerFormSchema>
