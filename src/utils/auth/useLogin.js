import { USER_AUTH } from "constants/apis";
import { useNavigate } from "react-router-dom";
import request from "utils/request";
import { setSession } from "./sessionHandler";

export default function useLogin() {
  const navigate = useNavigate();

  const handleError = (response) => {
    if (response.status === 401) {
      window.alert("Wrong username or password");
    }
  };

  const handleLogin = (username, password, isLoading) => {
    isLoading(true)
    request(
      USER_AUTH,
      {
        method: "POST",
        body: JSON.stringify({ username: username, password: password }),
      },
      handleError,
    ).then((data) => {
      isLoading(false)
      setSession(data.token);
      navigate("/store");
    });
  };

  return {
    handleLogin,
  };
}
