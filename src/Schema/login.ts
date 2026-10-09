import * as z from "zod"

export const loginSchema = z.object({
    email: z.string().nonempty('Email is required').email('Invalid email address'),
    password: z
        .string()
        .trim()
        .nonempty("Password is required")
        .min(8, "Password must be at least 8 characters")
        .regex(/[a-z]/, "Password must contain a lowercase letter")
        .regex(/[A-Z]/, "Password must contain an uppercase letter")
        .regex(/\d/, "Password must contain a number")
        .regex(
            /[^A-Za-z0-9]/,
            "Password must contain a special character"
        ),
})

export type LoginFormSchema = z.infer<typeof loginSchema>