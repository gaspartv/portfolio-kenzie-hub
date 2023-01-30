import { Route, Routes } from "react-router-dom";

import FreeRoutes from "../components/FreeRoutes";
import ProtectedRoutes from "../components/ProtectedRoutes";
import TechProvider from "../contexts/TechContext";

import { Dashboard } from "../page/dashboard";
import { Home } from "../page/home";
import { Login } from "../page/login";
import { Register } from "../page/register";

const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<ProtectedRoutes />}>
        <Route element={<TechProvider />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Route>
      <Route element={<FreeRoutes />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default RouterMain;
