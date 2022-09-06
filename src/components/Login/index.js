import styles from "./Login.module.css";
import Button from "components/Button";
import Input from "components/Input";

const { useState } = require("react");

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameInput = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(username, password);
  };

  return (
    <form className={styles["login-form"]} onSubmit={handleSubmit}>
      <h1 style={{ marginBottom: "40px", fontWeight: "600" }}>
        Login to Store
      </h1>
      <Input
        value={username}
        onChange={handleUsernameInput}
        placeholder="Username"
        name="username"
      />
      <Input
        value={password}
        onChange={handlePasswordInput}
        placeholder="Password"
        name="password"
      />
      <Button type="btn-primary" value="Login" onClick={handleSubmit} />
    </form>
  );
}

export default Login;
