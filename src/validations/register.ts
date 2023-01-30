import * as yup from "yup";

export const formSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup
    .string()
    .email("Deve ser um e-mail válido")
    .required("Email é obrigatório"),
  password: yup
    .string()
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/[a-z]/, "Deve conter ao menos 1 letra minuscula")
    .matches(/(\d)/, "Deve conter ao menos um número")
    .matches(/(\W)|_/, "Deve conter um caracter especial")
    .matches(/.{8,}/, "Deve ter no minimo 8 digitos")
    .required("Senha é obrigatória"),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password")],
      "Confirmação de senha deve ser igual a senha"
    ),
  bio: yup.string().required("Bio obrigatório"),
  contact: yup.string().required("Contato obrigatório"),
});
