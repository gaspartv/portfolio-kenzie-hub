import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import logo from "../../assets/logo.png";

import Button from "../../components/Button";
import FormDefault from "../../components/Form";
import { UserContext } from "../../contexts/UserContext";
import { formSchema } from "../../validations/login";

import { LinkStyled, LoginDiv, LoginMain } from "./styles";

interface iLogin {
    email: string,
    password: string,
}

export const Login = () => {
  const { onSubmitLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLogin>({
    resolver: yupResolver(formSchema),
  });

  return (
    <LoginMain>
      <LoginDiv>
        <img src={logo} alt="Logo" />
        <FormDefault onSubmit={handleSubmit(onSubmitLogin)}>
          <h1>Login</h1>
          <label>
            Email
            <span>{errors.email && <>{errors.email?.message}</>}</span>
          </label>
          <input
            type="text"
            placeholder="Digite seu email"
            {...register("email")}
          />

          <label>
            Senha
            <span>{errors.password && <>{errors.password?.message}</>}</span>
          </label>
          <input
            type="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />

          <Button backgroundColor="#ff577f">Entrar</Button>

          <p>Ainda não possui uma conta?</p>
          <LinkStyled to="/register">Cadastre-se</LinkStyled>
        </FormDefault>
      </LoginDiv>
    </LoginMain>
  );
};
