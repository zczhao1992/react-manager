import welcome from '@/assets/images/welcome01.png'
import styles from './index.module.less'

export default function Welcome() {
  return (
    <div className={styles.home}>
      <img src={welcome} alt='welcome' />
    </div>
  )
}
