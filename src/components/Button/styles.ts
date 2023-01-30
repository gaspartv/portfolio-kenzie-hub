import styled from "styled-components";

interface iStyledButton {
  backgroundColor: string;
}

export const ButtonMain = styled.button`
  background: ${({ backgroundColor }: iStyledButton) => backgroundColor};
  border: 1px solid ${({ backgroundColor }: iStyledButton) => backgroundColor};
  border-radius: 4px;
  height: 38px;
  margin: 0 18px 20px;
  font-weight: 500;
  font-size: 13px;
  line-height: 21px;
  color: #ffffff;
  cursor: pointer;
  :hover {
    filter: brightness(1.1);
  }
`;
