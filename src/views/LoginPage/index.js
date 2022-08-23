import NavBar from "components/NavBar";
import Login from "components/Login";
import { useNavigate } from "react-router-dom";

import { caption } from "views/StorePage/caption";
import { USER_AUTH } from "constants/apis";
import request from "utils/request";

export default function LoginPage() {
  const navigate = useNavigate();

  const onFetched = (data) => {
    sessionStorage.setItem("token", data.token);
    navigate("/store");
  };

  const handleLogin = (username, password) => {
    if (username === "fgirham" && password === "password") {
      request(
        USER_AUTH,
        {
          method: "POST",
          body: JSON.stringify({ username: "mor_2314", password: "83r5^_" }),
        },
        onFetched
      );
    } else {
      window.alert("Wrong username or password");
    }
  };

  return (
    <div className="container">
      <NavBar />
      <Login onSubmit={handleLogin} />
      {caption}
    </div>
  );
}
