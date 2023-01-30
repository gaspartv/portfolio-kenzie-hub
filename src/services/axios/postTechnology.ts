import { instance } from "./api";

export interface iTech {
  title: string;
  status: string;
}

export interface iTechRegister {
  created_at: string;
  id: string;
  status: string;
  title: string;
  update_at: string;
  user: {};
}

export const postTechnology = async (info: iTech): Promise<iTechRegister> => {
  const { data } = await instance.post<iTechRegister>("/users/techs", info);
  return data;
};
