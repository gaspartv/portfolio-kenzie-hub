import { ReactNode } from "react";
import { FormMain } from "./styles";

interface iFormProps {
  children: ReactNode;
  onSubmit: () => void;
}

const FormDefault = ({ children, onSubmit }: iFormProps) => {
  return <FormMain onSubmit={onSubmit}>{children}</FormMain>;
};

export default FormDefault;
