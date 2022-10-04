import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import AppTemplate from "../templates/AppTemplate";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AppTemplate>
              <Home />
            </AppTemplate>
          }
        />
        <Route
          path="/perfil"
          element={
            <AppTemplate>
              <Perfil />
            </AppTemplate>
          }
        />
        <Route
          path="/registro"
          element={
            <AppTemplate>
              <Registro />
            </AppTemplate>
          }
        />
        <Route
          path="/inventario"
          element={
            <AppTemplate>
              <Inventario />
            </AppTemplate>
          }
        />
        <Route
          path="/finanzas"
          element={
            <AppTemplate>
              <Finanzas />
            </AppTemplate>
          }
        />
        <Route
          path="/reportes"
          element={
            <AppTemplate>
              <Reportes />
            </AppTemplate>
          }
        />
        <Route
          path="/documentos"
          element={
            <AppTemplate>
              <Documentos />
            </AppTemplate>
          }
        />
        <Route
          path="/personal"
          element={
            <AppTemplate>
              <Personal />
            </AppTemplate>
          }
        />

        <Route
          path="/proyectos"
          element={
            <AppTemplate>
              <Proyectos />
            </AppTemplate>
          }
        />
        <Route
          path="/web"
          element={
            <AppTemplate>
              <Web />
            </AppTemplate>
          }
        />

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
