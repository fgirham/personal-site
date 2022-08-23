import styles from "./Login.module.css";
import Button from "components/Button";

const { useState } = require("react");

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setPasswordVisibility] = useState(false)

  const handleUsernameInput = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault()
    props.onSubmit(username, password);
  };
  const togglePassword = () => {
    setPasswordVisibility(!isPasswordVisible)
  }
  const handleCutCopy = (e) => {
    e.preventDefault()
    e.nativeEvent.stopImmediatePropagation();
  }

  return (
    <form className={styles["login-form"]} onSubmit={handleSubmit}>
      <h1 style={{ marginBottom: "40px", fontWeight: "600" }}>
        Login to Store
      </h1>
      <div className={styles.input}>
        {/* <label for="username">Username</label> */}
        <input
          type="text"
          className={styles["input-field"]}
          value={username}
          onChange={handleUsernameInput}
          placeholder="Username"
          name="username"
        />
      </div>
      <div className={styles.input}>
        {/* <label for="password">Password</label> */}
        <input
          type={isPasswordVisible ? "text" : "password"}
          className={styles["input-field"]}
          value={password}
          onCopy={handleCutCopy}
          onCut={handleCutCopy}
          onChange={handlePasswordInput}
          placeholder="Password"
          name="password"
        />
        <span className={styles["p-viewer"]} onClick={togglePassword}>
          <i className={`icon fa ${isPasswordVisible ? 'fa-eye-slash' : 'fa-eye'}`}></i>
        </span>
      </div>
      <Button class="primary" text="Login" onClick={handleSubmit} />
      {/* <input
        className={styles["input-button"]}
        type="submit"
        value="Submit"
      ></input> */}
    </form>
  );
}

export default Login;
