import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { TypographyH4 } from "@/components/typography/h4";
import { TypographyP } from "@/components/typography/p";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { registerSchema } from "@/schemas/register";

export const Register = () => {

  const registerForm = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      establishment: "",
      phone: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    console.log(values);
  };

  return (
    <div className="flex flex-col p-4 gap-8 bg-red">
      <TypographyH4>Possui uma barbearia? <br /> Cadastre já!</TypographyH4>
      <TypographyP>
        Experimente todas as funcionalidades por um preço que cabe no seu bolso.
      </TypographyP>
      <Form {...registerForm}>
        <form onSubmit={registerForm.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={registerForm.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Digite seu nome completo</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome completo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={registerForm.control}
            name="establishment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Digite o nome do seu estabelecimento</FormLabel>
                <FormControl>
                  <Input placeholder="Nome do estabelecimento" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={registerForm.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone para contato</FormLabel>
                <FormControl>
                  <Input placeholder="(XX) XXXXX-XXXX" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={registerForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input placeholder="seuemail@exemplo.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={registerForm.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Digite uma senha</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Sua senha" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-4 justify-end">
            <Button type="submit">Salvar</Button>
            <Button type="button" variant="secondary">
              Cancelar
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
