import './App.css';
import { createContext, useState } from 'react';
import { useRoutes } from "react-router-dom";
import routes from './routes'

const ThemeContext = createContext(null)

function App() {
  const isLoggedIn = () => {
    return sessionStorage.getItem('token')
  }
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme => theme === 'light' ? 'dark' : 'light')
  }

  let routerView = useRoutes(routes(isLoggedIn()))

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="App" id={theme}>
        {routerView}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
