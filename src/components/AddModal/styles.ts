import styled, { keyframes } from "styled-components";

const entering = keyframes`
  0% {
    transform: translateX(-100vw);
  }

  100% {
    transform: translateX(0px);
  }
`;

export const Div = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #00000095;
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    max-width: 370px;
    background: #212529;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 12px;
    border-radius: 4px;
    animation: ${entering} 0.3s
      linear;
    div {
      background: #343b41;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 16px;
      border-radius: 4px 4px 0px 0px;
      h2 {
        font-weight: 700;
        font-size: 11.2304px;
        line-height: 19px;
        color: #f8f9fa;
      }
      button {
        background-color: transparent;
        border: none;
        font-weight: 600;
        font-size: 13px;
        line-height: 21px;
        color: #868e96;
        cursor: pointer;
      }
      button:hover {
        filter: brightness(1.2);
      }
    }
    label {
      position: relative;
      font-weight: 400;
      font-size: 10px;
      color: #f8f9fa;
      margin: 16px 0;
      padding: 0 16px;
      span {
        position: absolute;
        top: 14px;
        left: 20px;
        color: red;
      }
    }
    input {
      background: #343b41;
      height: 38.5px;
      border: 0.9772px solid #f8f9fa;
      border-radius: 3.20867px;
      padding: 0 16px;
      margin: 0 16px;
      font-weight: 400;
      font-size: 13.0293px;
      line-height: 21px;
      color: #f8f9fa;
    }
    select {
      background: #343b41;
      height: 38.5px;
      border: 0.9772px solid #f8f9fa;
      border-radius: 3.20867px;
      padding: 0 16px;
      margin: 0 16px;
      font-weight: 400;
      font-size: 13.0293px;
      line-height: 21px;
      color: #f8f9fa;
      cursor: pointer;
    }
    .register {
      background: #ff577f;
      border: 1.2182px solid #ff577f;
      border-radius: 4.06066px;
      height: 38.5px;
      font-weight: 500;
      font-size: 12.8347px;
      line-height: 21px;
      color: #ffffff;
      margin: 16px;
      cursor: pointer;
    }
  }
`;
