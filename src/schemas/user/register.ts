import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(2, "Digite pelo menos 2 caracteres"),
  establishment: z.string().min(2, "Digite pelo menos 2 caracteres"),
  phone: z.string().min(10, "Digite um número válido"),
  email: z.string().email("Digite um e-mail válido"),
  password: z.string().min(6, "A senha deve conter pelo menos 6 caracteres"),
});
