import { iUser } from "../../contexts/UserContext";
import { instance } from "./api";

interface iLogin {
  token: string;
  user: iUser;
}

export interface iUserLogin {
  email: string;
  password: string;
}

export const login = async (data: iUserLogin): Promise<iLogin> => {
  const response = await instance.post<iLogin>("/sessions", data);
  return response.data;
};
