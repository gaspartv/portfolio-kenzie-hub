import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const FreeRoutes = () => {
  const { token } = useContext(UserContext);

  return !token ? <Outlet /> : <Navigate to="/dashboard" replace />;
};

export default FreeRoutes;
