import styled from "styled-components";

export const DashboardStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  padding: 16px 13px;
  border-bottom: 1px solid #212529;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1000px;
    margin: 0 auto;
    button {
      width: 67px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #212529;
      border-radius: 4px;
      border: none;
      color: #f8f9fa;
      font-weight: 600;
      font-size: 12px;
      line-height: 28px;
      text-decoration: none;
      cursor: pointer;
    }
    button:hover {
      filter: brightness(1.2);
    }
  }
`;

export const ProfileStyled = styled.section`
  padding: 30px 13px;
  border-bottom: 1px solid #212529;
  div {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    h1 {
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
      color: #f8f9fa;
    }
    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 22px;
      color: #868e96;
    }
  }
`;

export const Technology = styled.div`
  padding: 30px 13px;
  border-bottom: 1px solid #212529;
  div {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const SectionStyled = styled.section`
  width: 100%;
  margin-bottom: 21px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: #f8f9fa;
  }
  button {
    width: 33px;
    height: 33px;
    background: #212529;
    border-radius: 4px;
    color: #f8f9fa;
    border: none;
    font-size: 22px;
    cursor: pointer;
  }
  button:hover {
    filter: brightness(1.2);
  }
`;

export const TechnologyList = styled.ul`
  display: flex;
  flex-direction: column;
  background: #212529;
  border-radius: 4px;
  padding: 22px 9px;
  gap: 16px;
  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #121214;
    border-radius: 4px;
    padding: 12px;
    p {
      width: 100%;
      font-weight: 700;
      font-size: 14.2123px;
      line-height: 24px;
      color: #f8f9fa;
      cursor: pointer;
    }
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      gap: 15px;
      margin-bottom: 0px;
      span {
        font-weight: 400;
        font-size: 12px;
        line-height: 22px;
        text-align: right;
        color: #868e96;
      }
      img {
        cursor: pointer;
      }
      img:hover {
        filter: brightness(0.5);
      }
    }
  }
`;
