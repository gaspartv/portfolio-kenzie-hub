import { ButtonMain } from "./styles";

interface iButtonProps {
  backgroundColor: string;
  children: React.ReactNode;
}

const Button = ({ backgroundColor, children }: iButtonProps) => {
  return (
    <ButtonMain backgroundColor={backgroundColor} type="submit">
      {children}
    </ButtonMain>
  );
};

export default Button;
