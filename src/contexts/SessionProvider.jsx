import { useState } from "react";
import SessionContext from "./SessionContext";

const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(false);
  const [user, setUser] = useState({});
  return (
    <SessionContext.Provider value={{ session, setSession, user, setUser }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
