import { useContext } from "react";
import SessionContext from "../contexts/SessionContext";

export const userLogged = () => {
  const { session } = useContext(SessionContext);
  return session;
};

export const userLogin = () => {
  console.log("login");
};

export const userLogout = () => {
  console.log("logout");
};
