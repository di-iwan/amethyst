import { z } from "zod";

export const formSchema = z.object({
    firstName: z.string().nonempty("Поле не должно быть пустым"),
    lastName: z.string().nonempty("Поле не должно быть пустым"),
    email: z.string().email("Не валидный email").nonempty("Поле не должно быть пустым"),
    password: z.string().min(6, "Пароль должен содержать не менее 6 символов").nonempty("Поле не должно быть пустым"),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
})

export type FormSchema = typeof formSchema;
