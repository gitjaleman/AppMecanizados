import { useContext } from "react";
import SessionContext from "../contexts/SessionContext";

const useUser = () => {
  const status = useContext(SessionContext);
  const { setUser, setSession } = status;

  const userLogged = () => {
    return status;
  };

  const userLogin = (data) => {
    setUser(data);
    setSession(true);
  };

  const userLogout = () => {
    setUser({});
    setSession(false);
  };

  return {
    userLogged,
    userLogin,
    userLogout,
  };
};

export default useUser;
