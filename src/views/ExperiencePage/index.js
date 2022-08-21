import styles from './styles.module.css'
import Hero from 'components/Hero';

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <Hero />
    </div>
  )
}