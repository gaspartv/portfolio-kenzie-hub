import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import logo from "../../assets/logo.png";

import Button from "../../components/Button";
import FormDefault from "../../components/Form";
import { UserContext } from "../../contexts/UserContext";
import { formSchema } from "../../validations/register";

import { RegisterMain, RegisterStyle, LinkStyle } from "./styles";

export interface iRegister {
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
  bio: string,
  contact: string,
  course_module: string
}

export const Register = () => {
  const { onSubmitRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegister>({
    resolver: yupResolver(formSchema),
  });

  return (
    <RegisterMain>
      <RegisterStyle>
        <div>
          <img src={logo} alt="Logo" />
          <LinkStyle to="/login">Voltar</LinkStyle>
        </div>
        <FormDefault onSubmit={handleSubmit(onSubmitRegister)}>
          <h1>Crie sua conta</h1>
          <p>Rápido e grátis, vamos nessa!</p>

          <label>
            Nome<span>{errors.name && <>{errors.name?.message}</>}</span>
          </label>
          <input
            type="text"
            placeholder="Digite seu nome"
            {...register("name")}
          />

          <label>
            Email<span>{errors.email && <>{errors.email?.message}</>}</span>
          </label>
          <input
            type="text"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />

          <label>
            Senha
            <span>{errors.password && <>{errors.password?.message}</>}</span>
          </label>
          <input
            type="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />

          <label>
            Confirmar senha
            <span>
              {errors.confirmPassword && <>{errors.confirmPassword?.message}</>}
            </span>
          </label>
          <input
            type="password"
            placeholder="Digite novamente sua senha"
            {...register("confirmPassword")}
          />

          <label>
            Bio<span>{errors.bio && <>{errors.bio?.message}</>}</span>
          </label>
          <input
            type="text"
            placeholder="Fale sobre você"
            {...register("bio")}
          />

          <label>
            Contato
            <span>{errors.contact && <>{errors.contact?.message}</>}</span>
          </label>
          <input
            type="text"
            placeholder="Opção de contato"
            {...register("contact")}
          />

          <label>Selecionar módulo</label>
          <select {...register("course_module")}>
            <option value="firstModule">Primeiro módulo</option>
            <option value="secondModule">Segudo módulo</option>
            <option value="thirdModule">Terceiro módulo</option>
            <option value="fourthModule">Quarto módulo</option>
            <option value="fifthModule">Quinto módulo</option>
            <option value="sixthModule">Sexto módulo</option>
          </select>

          <Button backgroundColor="#59323f">Cadastrar</Button>
        </FormDefault>
      </RegisterStyle>
    </RegisterMain>
  );
};
