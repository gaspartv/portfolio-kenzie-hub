import { iRegister } from "../../page/register";
import { instance } from "./api";

export const postRegister = async (data: iRegister) => {
  return await instance.post<iRegister>("/users", data);
};
