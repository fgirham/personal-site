import styles from './styles.module.css'
import NavBar from 'components/NavBar';
import { Counter } from 'features/counter/Counter';

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <NavBar />
      <Counter />
    </div>
  )
}