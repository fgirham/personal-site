import NavBar from "components/NavBar";
import Login from "components/Login";
import { caption } from "views/StorePage/caption";

import useLogin from "utils/auth/useLogin";
import Spinner from "components/Spinner";
import { useState } from "react";

export default function LoginPage() {
  const [isLoading, setLoadingStatus] = useState(false)

  const { handleLogin } = useLogin();

  const handleSubmit = (username, password) => {
    handleLogin(username, password, setLoadingStatus)
  }

  return (
    <>
      <Spinner isVisible={isLoading} />
      <div className="container">
        <NavBar />
        <Login onSubmit={handleSubmit} />
        {caption}
      </div>
    </>
  );
}
