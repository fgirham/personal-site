import logo from '../../assets/logo-fgi.svg'
import styles from './styles.module.css'

function NavBar() {
  return (
    <nav>
      <div className={styles["navbar-brand"]}>
        <img className={styles["logo"]} src={logo} alt=""/>
      </div>
      <div className={styles["nav-link"]}>
        <div className={styles["nav-item"]}>About</div>
        <div className={styles["nav-item"]}>Experience</div>
      </div>
    </nav>
  )
}

export default NavBar