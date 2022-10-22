import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRouter from "./ProtectedRouter";
import {
  Home,
  Perfil,
  Registro,
  Inventario,
  Finanzas,
  Reportes,
  Documentos,
  Personal,
  Proyectos,
  Web,
  Login,
} from "../pages";
import useUser from "../hooks/useUser";

const AppRouter = () => {
  const { userLogged } = useUser();
  const { session, user } = userLogged();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRouter session={session} user={user} />}>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="/finanzas" element={<Finanzas />} />
          <Route path="/reportes" element={<Reportes />} />
          <Route path="/documentos" element={<Documentos />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/web" element={<Web />} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
