import styles from './styles.module.css'
import logo from '../../assets/logo-fgi.svg'
import Navigation from '../../components/Navigation';

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt='' />
      <h1 className={styles.label}>Irham's Personal Website</h1>
      <Navigation />
    </div>
  )
}