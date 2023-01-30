import { Link } from "react-router-dom";
import styled from "styled-components";

export const RegisterMain = styled.div`
  width: 100vw;
`;

export const RegisterStyle = styled.div`
  max-width: 370px;
  min-width: 250px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 31px;
  padding: 12px;
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const LinkStyle = styled(Link)`
  width: 67px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #212529;
  border-radius: 4px;
  color: #f8f9fa;
  font-weight: 600;
  font-size: 12px;
  line-height: 28px;
  text-decoration: none;
  :hover {
    filter: brightness(1.2);
  }
`;
