import styles from './styles.module.css'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <div className={styles.navigation}>
      {/* <Link className={styles["nav-item"]} to="/profile">Profile</Link>
      <Link className={styles["nav-item"]} to="/experience">Experience</Link> */}
      <Link className={styles["nav-item"]} to="/store">Store</Link>
    </div>
  )
}