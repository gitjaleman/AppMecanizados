import "./App.css";
import AppRouter from "./routers/AppRouter";
import SessionProvider from "./contexts/SessionProvider";

function App() {
  return (
    <SessionProvider>
      <AppRouter />
    </SessionProvider>
  );
}
export default App;
