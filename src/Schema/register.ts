import * as z from "zod"

export const registerSchema = z.object({
    name: z.string()
        .trim()
        .nonempty('Full name is required')
        .min(5, 'Full name must be at least 5 characters')
        .max(50, 'Full name must be at most 50 characters'),
    username: z.string()
        .trim()
        .nonempty('Username is required')
        .min(2, 'Username must be at least 2 characters')
        .max(20, 'Username must be at most 20 characters')
        .regex(/^[a-zA-Z0-9_]{3,20}$/, "Username must be 3-20 characters and can only contain letters, numbers and underscores"),
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
    rePassword: z.string()
        .trim()
        .nonempty('Password is required'),
    dateOfBirth: z.string()
        .nonempty('Date of birth is required')
        .refine((value) => {
            const today = new Date();
            const birthDate = new Date(value);

            const minDate = new Date(today);
            minDate.setFullYear(today.getFullYear() - 50);
            const maxDate = new Date(today);
            maxDate.setFullYear(today.getFullYear() - 18);
            return (
                (birthDate >= minDate && birthDate <= maxDate)
            );
        }, "Age should be between 18 and 50"),
    gender: z.enum(['male', 'female'], {
        message: 'Gender is required',

    })
}).refine((data) => data.rePassword === data.password, {
    message: "password and rePassword must match",
    path: ["rePassword"]
})

export type RegisterFormSchema = z.infer<typeof registerSchema>