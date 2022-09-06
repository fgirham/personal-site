// React
import { Navigate, useRoutes } from "react-router-dom";

// Component
import LandingPage from "views/LandingPage";
import ProfilePage from "views/ProfilePage";
import ExperiencePage from "views/ExperiencePage";
import StorePage from "views/StorePage";
import LoginPage from "views/LoginPage";
import ProductPage from "views/ProductPage";

//Util
import { getSession } from "utils/auth/sessionHandler";

export default function RouterView() {
  return useRoutes([
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
      element: getSession().token ? <StorePage /> : <Navigate to="/login" />,
    },
    {
      path: "store/product/:id",
      element: <ProductPage />,
    },
    {
      path: "login",
      element: !getSession().token ? <LoginPage /> : <Navigate to="/store" />,
    },
  ]);
}
