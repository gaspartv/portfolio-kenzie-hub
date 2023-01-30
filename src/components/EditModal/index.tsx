import { useContext } from "react";
import { useForm } from "react-hook-form";

import { TechContext } from "../../contexts/TechContext";
import { UserContext } from "../../contexts/UserContext";
import { iEditTech } from "../../services/axios/putTechnology";

import { Div } from "./styles";

export const EditModal = () => {
  const { user, setOpenEdit } = useContext(UserContext);
  const { editTech } = useContext(TechContext);

  const { register, handleSubmit } = useForm<iEditTech>();

  const idEdit = localStorage.getItem("@ID");
  const techSearch = user ? user.techs.filter((tech) => tech.id === idEdit)[0] : null
  
  return (
    techSearch ? 
    <Div>
      <form onSubmit={handleSubmit(editTech)}>
        <div>
          <h2>Editar tecnologia</h2>
          <button
            onClick={() => {
              localStorage.removeItem("@ID");
              setOpenEdit(false);
            }}
          >
            X
          </button>
        </div>
        <label>Nome</label>
        <input type="text" disabled value={techSearch.title} />
        <label>Status</label>
        <select {...register("status")}>
          <option value="beginner">Iniciante</option>
          <option value="intermediary">Intermediário</option>
          <option value="advanced">Avançado</option>
        </select>
        <button className="editButton">Editar tecnologia</button>
      </form>
    </Div>
    :
    <></>
  );
};
