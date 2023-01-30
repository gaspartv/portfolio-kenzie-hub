import { instance } from "./api";

export interface iEditTech {
  status: string;
}

export interface iResultEditTech {
  created_at: string;
  id: string;
  status: string;
  title: string;
  updated_at: string;
}

export const putTechnology = async (
  data: iEditTech,
  idEdit: string | null
): Promise<iResultEditTech> => {
  const response = await instance.put(`/users/techs/${idEdit}`, data);
  return response.data;
};
