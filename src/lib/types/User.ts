import { z } from "zod"

export const registerFormSchema = z.object({
    username: z.string().min(3),
    email: z.string().email(),
    number: z.string().length(10)
})

export type registerFormType = z.infer<typeof registerFormSchema>
