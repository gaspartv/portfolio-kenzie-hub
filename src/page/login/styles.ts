import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginMain = styled.div`
  width: 100vw;
`;

export const LoginDiv = styled.div`
  max-width: 370px;
  min-width: 250px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 31px;
  padding: 12px;
`;

export const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #868e96;
  height: 38px;
  border: 1.2182px solid #868e96;
  border-radius: 4px;
  margin-bottom: 34px;
  margin: 0 12px 34px;
  font-weight: 500;
  font-size: 12.8347px;
  line-height: 21px;
  color: #f8f9fa;
  text-decoration: none;
  cursor: pointer;
  :hover {
    filter: brightness(.8);
  }
`;
