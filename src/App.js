import './App.css';
import LandingPage from './views/LandingPage';
import ProfilePage from 'views/ProfilePage'
import ExperiencePage from 'views/ExperiencePage'
import { createContext, useState } from 'react';
import { useRoutes } from "react-router-dom";

const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme => theme === 'light' ? 'dark' : 'light')
  }

  let routerView = useRoutes([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "profile",
      element: <ProfilePage />,
    },
    {
      path: "experience",
      element: <ExperiencePage />,
    },
  ])

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="App" id={theme}>
        {routerView}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
