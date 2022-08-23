import './App.css';
import { createContext, useState } from 'react';
import { useRoutes } from "react-router-dom";
import routes from './routes'

import ScrollUp from 'components/ScrollUp';

const ThemeContext = createContext(null)

function App() {
  const isLoggedIn = () => {
    return localStorage.getItem('session')
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
        <ScrollUp />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
