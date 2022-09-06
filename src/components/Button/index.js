import styles from "./Button.module.css";

const Button = (props) => {
  const { type, size, value, onClick, hover } = props

  const btnSize = size ? `btn-${size}` : 'btn'
  const btnStyle = `${styles[type]} ${styles[btnSize]} ${hover ? styles["btn-hover"] : ''}`

  return (
    <button className={btnStyle} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
