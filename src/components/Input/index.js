import { useState } from "react";
import styles from "./Input.module.css";

export default function Input(props) {
  const { type, value, onChange, placeholder, name } = props;
  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const togglePassword = () => {
    setPasswordVisibility(!isPasswordVisible);
  };
  const handleCutCopy = (e) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
  };

  const inputType = type ? type : 'text'

  const isPassword = name && name === "password";
  const passwordType = isPasswordVisible ? "text" : "password";

  return (
    <div className={styles.input}>
      <input
        type={isPassword ? passwordType : inputType}
        className={styles["input-field"]}
        value={value}
        onChange={onChange}
        onCut={isPassword ? handleCutCopy : () => {}}
        onCopy={isPassword ? handleCutCopy : () => {}}
        placeholder={placeholder}
        name={name}
      />
      {isPassword && (
        <span className={styles["p-viewer"]} onClick={togglePassword}>
          <i
            className={`icon fa ${
              isPasswordVisible ? "fa-eye-slash" : "fa-eye"
            }`}
          ></i>
        </span>
      )}
    </div>
  );
}
