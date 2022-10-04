import { useContext } from "react";
import SessionContext from "../contexts/SessionContext";

const useSession = () => {
  const valores = useContext(SessionContext);
  return valores;
};

export default useSession;
