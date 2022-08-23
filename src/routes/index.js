import { Navigate } from "react-router-dom"
import LandingPage from 'views/LandingPage'
import ProfilePage from 'views/ProfilePage'
import ExperiencePage from 'views/ExperiencePage'
import StorePage from 'views/StorePage'
import LoginPage from "views/LoginPage"

const routes = (isLoggedIn) => [
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
  {
    path: "store",
    element: isLoggedIn ? <StorePage /> : <Navigate to="/login" />,
  },
  {
    path: "login",
    element: <LoginPage />
  },
]

export default routes