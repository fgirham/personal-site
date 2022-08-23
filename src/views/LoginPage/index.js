import styles from "./styles.module.css";
import NavBar from "components/NavBar";
import Login from "components/Login";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = async (username, password) => {
    if (username === 'fgirham' && password === 'password') {
      sessionStorage.setItem("token", "1892389YBKJBF34");
      navigate("/store");
    } else { window.alert('Wrong username or password') }
  };

  return (
    <div className="container">
      <NavBar />
      <Login onSubmit={handleLogin} />
    </div>
  );
}
