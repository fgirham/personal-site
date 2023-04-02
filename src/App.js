import "./App.css";
import { Suspense, createContext, useEffect, useState } from "react";
import ScrollUp from "components/ScrollUp";
import RouterView from "./routes";
import { useLocation } from "react-router-dom";
import { setSession, getSession, removeSession } from "utils/auth/sessionHandler";

const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const location = useLocation()

  useEffect(() => {
    const session = getSession()
    session.isExpired ? removeSession() : setSession(session.token)
  }, [location])

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Suspense>
          <RouterView isLoggedIn={getSession().isExpired === false} />
        </Suspense>
        <ScrollUp />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
