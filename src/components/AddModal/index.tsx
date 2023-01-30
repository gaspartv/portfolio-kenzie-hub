import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";

import { formSchema } from "../../validations/addTechnology";
import { UserContext } from "../../contexts/UserContext";
import { TechContext } from "../../contexts/TechContext";

import { Div } from "./styles";
import { iTech } from "../../services/axios/postTechnology";

export const AddModal = () => {
  const { modalStatus, setModalStatus } = useContext(UserContext);
  const { addTechnology } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iTech>({
    resolver: yupResolver(formSchema),
  });

  if (modalStatus) {
    return (
      <Div>
        <form onSubmit={handleSubmit(addTechnology)}>
          <div>
            <h2>Cadastrar Tecnologia</h2>
            <button onClick={() => setModalStatus(false)}>X</button>
          </div>
          <label>
            Nome
            <span>{errors.title && <>{errors.title?.message}</>}</span>
          </label>
          <input
            type="text"
            placeholder="Digite seu nome..."
            {...register("title")}
          />
          <label>Selecionar status</label>
          <select {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <button type="submit" className="register">
            Cadastrar Tecnologia
          </button>
        </form>
      </Div>
    );
  }
  return <></>;
};
