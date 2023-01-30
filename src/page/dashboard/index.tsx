import { useContext } from "react";

import logo from "../../assets/logo.png";
import trash from "../../assets/trash.png";

import { UserContext } from "../../contexts/UserContext";
import { AddModal } from "../../components/AddModal";
import { EditModal } from "../../components/EditModal";
import { TechContext } from "../../contexts/TechContext";

import {
  DashboardStyled,
  Header,
  ProfileStyled,
  SectionStyled,
  Technology,
  TechnologyList,
} from "./styles";

export const Dashboard = () => {
  const { user, logout, openEdit, setOpenEdit, modalStatus, setModalStatus } =
    useContext(UserContext);

  const { deleteTechnology } = useContext(TechContext);

  return user ? (
    <DashboardStyled>
      {modalStatus && <AddModal />}
      {openEdit && <EditModal />}
      <Header>
        <div>
          <img src={logo} alt="Logo" />
          <button onClick={() => logout()}>Sair</button>
        </div>
      </Header>
      <ProfileStyled>
        <div>
          <h1>Olá, {user.name}</h1>
          <p>{user.course_module}</p>
        </div>
      </ProfileStyled>
      <Technology>
        <div>
          <SectionStyled>
            <h2>Tecnologias</h2>
            <button
              onClick={() => {
                setModalStatus(true);
              }}
            >
              +
            </button>
          </SectionStyled>
          <TechnologyList>
            {user.techs.map((elem) => {
              return (
                <li key={elem.id}>
                  <p
                    onClick={() => {
                      localStorage.setItem("@ID", elem.id);
                      setOpenEdit(true);
                    }}
                  >
                    {elem.title}
                  </p>
                  <div>
                    <span>{elem.status}</span>
                    <img
                      onClick={() => deleteTechnology(elem.id)}
                      src={trash}
                      alt="Lixeira"
                    />
                  </div>
                </li>
              );
            })}
          </TechnologyList>
        </div>
      </Technology>
    </DashboardStyled>
  ) : (
    <></>
  );
};
