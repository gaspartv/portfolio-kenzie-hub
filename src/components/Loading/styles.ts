import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const Div = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #00000090;
  position: fixed;
  z-index: 150;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 70px;
    animation: ${rotate} 4s linear infinite;
  }
`;
