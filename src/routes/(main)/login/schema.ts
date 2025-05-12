import { z } from "zod";

export const formSchema = z.object({
    email: z.string().email("Не валидный email").nonempty("Поле не должно быть пустым"),
    password: z.string()
})
export type FormSchema = typeof formSchema;
