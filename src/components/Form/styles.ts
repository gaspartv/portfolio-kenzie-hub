import styled from "styled-components";

export const FormMain = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  h1 {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #f8f9fa;
    margin-top: 35px;
    margin-bottom: 20px;
    text-align: center;
  }
  p {
    font-weight: 400;
    font-size: 9.59437px;
    line-height: 18px;
    color: #868e96;
    margin-bottom: 20px;
    text-align: center;
  }
  label {
    position: relative;
    margin: 0 18px;
    margin-bottom: 15px;
    font-weight: 400;
    font-size: 9.73988px;
    line-height: 0px;
    color: #f8f9fa;
  }
  input {
    height: 40px;
    margin: 0 18px;
    margin-bottom: 30px;
    background-color: #343b41;
    border: 1px solid #343b41;
    border-radius: 3px;
    padding: 0 12px;
    color: #f8f9fa;
  }
  input::placeholder {
    font-weight: 400;
    font-size: 12.9865px;
    line-height: 21px;
    color: #868e96;
  }
  span {
    position: absolute;
    top: 65px;
    left: 15px;
    color: red;
  }
  select {
    height: 40px;
    margin: 0 18px;
    margin-bottom: 20px;
    background-color: #343b41;
    border: 1px solid #343b41;
    border-radius: 3px;
    padding: 0 12px;
    color: #f8f9fa;
  }
`;
