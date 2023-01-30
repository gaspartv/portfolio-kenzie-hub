import { createContext, useContext } from "react";
import { Outlet } from "react-router-dom";
import { toast } from "react-toastify";

import { iTech, postTechnology } from "../services/axios/postTechnology";
import { instance } from "../services/axios/api";
import { LoadContext } from "./LoadContext";
import { UserContext } from "./UserContext";
import { iEditTech, putTechnology } from "../services/axios/putTechnology";

interface iTechContext {
  addTechnology: (data: iTech) => Promise<void>;
  editTech: (data: iEditTech) => Promise<void>;
  deleteTechnology: (id: string) => Promise<void>;
  idEdit: string | null;
}

export const TechContext = createContext({} as iTechContext);

const TechProvider = () => {
  const { setLoad } = useContext(LoadContext);
  const { setRender, setModalStatus, setOpenEdit } = useContext(UserContext);
  const idEdit = localStorage.getItem("@ID");

  const addTechnology = async (data: iTech) => {
    setLoad(true);
    try {
      await postTechnology(data);
      setModalStatus(false);
      setRender(true);
      toast("Tecnologia cadastrada com sucesso!");
    } catch {
      toast("Não foi possível adicionar!");
    } finally {
      setLoad(false);
    }
  };

  const editTech = async (data: iEditTech) => {
    setLoad(true);
    try {
      await putTechnology(data, idEdit);
      toast("Tecnologia editada com sucesso!");
      setRender(true);
      localStorage.removeItem("@ID");
      setOpenEdit(false);
    } catch {
      toast("Não foi possível editar!");
    } finally {
      setLoad(false);
    }
  };

  const deleteTechnology = async (id: string) => {
    setLoad(true);
    try {
      await instance.delete(`/users/techs/${id}`);
      toast("Tecnologia removida com sucesso!");
      setRender(true);
    } catch {
      toast("Tecnologia não foi removida!");
    } finally {
      setLoad(false);
    }
  };

  return (
    <TechContext.Provider
      value={{ deleteTechnology, addTechnology, editTech, idEdit }}
    >
      <Outlet />
    </TechContext.Provider>
  );
};

export default TechProvider;
