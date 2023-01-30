/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { createContext, useEffect, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { iRegister } from "../page/register";

import { instance } from "../services/axios/api";
import { iUserLogin, login } from "../services/axios/getLogin";
import { postRegister } from "../services/axios/postRegister";
import { LoadContext } from "./LoadContext";

interface iUserContextProps {
  children: React.ReactNode;
}

interface iUserContext {
  user: iUser | null;
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
  onSubmitLogin: (data: iUserLogin) => Promise<void>;
  onSubmitRegister: (data: iRegister) => Promise<void>;
  logout: () => void;
  loading: boolean;
  token: string | null;
  modalStatus: boolean;
  setModalStatus: React.Dispatch<React.SetStateAction<boolean>>;
  setRender: React.Dispatch<React.SetStateAction<boolean>>;
  openEdit: boolean;
  setOpenEdit: React.Dispatch<React.SetStateAction<boolean>>;
  tech: {};
  setTech: React.Dispatch<React.SetStateAction<{}>>;
}

export interface iUser {
  avatar_url: string | null;
  bio: string;
  contact: string;
  course_module: string;
  created_at: string;
  email: string;
  id: string;
  name: string;
  techs: iTech[];
  updated_at: string;
  works: [];
}

interface iTech {
  created_at: string;
  id: string;
  status: string;
  title: string;
  updated_at: string;
}

export const UserContext = createContext({} as iUserContext);

const UserProvider = ({ children }: iUserContextProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { setLoad } = useContext(LoadContext);

  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [modalStatus, setModalStatus] = useState(false);
  const [render, setRender] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [tech, setTech] = useState({});

  const token = localStorage.getItem("@TOKEN");

  useEffect(() => {
    const loadUser = async () => {
      if (token) {
        try {
          instance.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await instance.get<iUser>("/profile");
          setUser(data);
        } catch (error) {
          localStorage.removeItem("@TOKEN");
          console.error(error);
        }
      }
      setLoading(false);
    };
    loadUser();
    setRender(false);
  }, [render]);

  const onSubmitLogin = async (data: iUserLogin) => {
    setLoad(true);
    try {
      const { user: userResponse, token } = await login(data);
      localStorage.setItem("@TOKEN", token);
      instance.defaults.headers.authorization = `Bearer ${token}`;
      const toNavigate = location.state?.from?.pathname || "dashboard";
      setUser(userResponse);
      navigate(toNavigate, { replace: true });
    } catch {
      toast("E-mail ou senha incorreto!");
    } finally {
      setLoad(false);
    }
  };

  const onSubmitRegister = async (data: iRegister) => {
    setLoad(true);
    try {
      await postRegister(data)
      toast("Cadastro realizado com sucesso!");
      navigate("/login");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        error.response?.data.message && toast("E-mail já cadastrado!");
      }
    } finally {
      setLoad(false);
    }
  };

  const logout = () => {
    setLoad(true);
    setTimeout(() => {
      setUser(null);
      localStorage.removeItem("@TOKEN");
      setLoad(false);
      navigate("/login");
    }, 250);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        onSubmitLogin,
        onSubmitRegister,
        logout,
        loading,
        token,
        modalStatus,
        setModalStatus,
        setRender,
        openEdit,
        setOpenEdit,
        tech,
        setTech,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
