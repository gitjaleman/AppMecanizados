import { Navigate, Outlet } from "react-router-dom";
import AppTemplate from "../templates/AppTemplate";

const ProtectedRouter = ({ session, user, children }) => {
  if (!session) {
    return <Navigate to={"/login"} />;
  }
  return (
    <AppTemplate>
      <Outlet />
    </AppTemplate>
  );
};

export default ProtectedRouter;
