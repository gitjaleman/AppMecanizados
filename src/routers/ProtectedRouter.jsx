import { Navigate, Outlet } from "react-router-dom";
import AppTemplate from "../templates/AppTemplate";

const ProtectedRouter = ({ session, children }) => {
  let x = 2;
  if (x == 1) {
    return <Navigate to={redirectTo} />;
  }
  return (
    <AppTemplate>
      <Outlet />
    </AppTemplate>
  );
};

export default ProtectedRouter;
