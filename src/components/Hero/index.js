import styles from "./styles.module.css";
import reportWebVitals from "../../reportWebVitals";

function Hero() {
  reportWebVitals(console.log);
  return (
    <div className={styles["hero-container"]}>
      <h1>Halo, Saya Irham</h1>
    </div>
  );   
}

export default Hero;
