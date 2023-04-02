// React
import { Navigate, useRoutes } from "react-router-dom";
import React from "react";

//Util
import { getSession } from "utils/auth/sessionHandler";

// Component
const LandingPage = React.lazy(() => import("views/LandingPage"))
const ProfilePage = React.lazy(() => import("views/ProfilePage"))
const ExperiencePage = React.lazy(() => import("views/ExperiencePage"))
const StorePage = React.lazy(() => import("views/StorePage"))
const LoginPage = React.lazy(() => import("views/LoginPage"))
const ProductPage = React.lazy(() => import("views/ProductPage"))

// import LandingPage from "views/LandingPage";
// import ProductPage from "views/ProductPage";
// import ProfilePage from "views/ProfilePage";
// import ExperiencePage from "views/ExperiencePage";
// import StorePage from "views/StorePage";
// import LoginPage from "views/LoginPage";

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
      element: getSession().token ? <StorePage /> : <Navigate to="/login" replace={true}/>,
    },
    {
      path: "store/product/:id",
      element: <ProductPage />,
    },
    {
      path: "login",
      element: !getSession().token ? <LoginPage /> : <Navigate to="/store" replace={true}/>,
    },
  ]);
}
