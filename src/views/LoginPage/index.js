import NavBar from "components/NavBar";
import Login from "components/Login";
import { useNavigate } from "react-router-dom";

import { caption } from "views/StorePage/caption";
import { USER_AUTH } from "constants/apis";
import request from "utils/request";

export default function LoginPage() {
  const navigate = useNavigate();

  const onFetched = (data) => {
    localStorage.setItem("session", data.token);
    navigate("/store");
  };

  const handleError = (response) => {
    if (response.status === 401) {
      window.alert("Wrong username or password");
    }
  };

  const handleLogin = (username, password) => {
    request(
      USER_AUTH,
      {
        method: "POST",
        body: JSON.stringify({ username: username, password: password }),
      },
      onFetched,
      handleError
    );
  };

  return (
    <div className="container">
      <NavBar />
      <Login onSubmit={handleLogin} />
      {caption}
    </div>
  );
}
