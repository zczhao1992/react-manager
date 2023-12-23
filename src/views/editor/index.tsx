// import EditCanvas from './EditCanvas'
import EditHeader from './components/EditHeader'
// import LeftPanel from './LeftPanel'
// import RightPanel from './RightPanel'
import styles from './index.module.less'

export default function Editor() {
  const loading = true
  const clearSelectedId = () => {}

  return (
    <div className={styles.container}>
      <EditHeader />
      <div className={styles['content-wrapper']}>
        <div className={styles.content}>
          <div className={styles.left}>{/* <LeftPanel /> */}</div>
          <div className={styles.main} onClick={clearSelectedId}>
            <div className={styles['canvas-wrapper']}>{/* <EditCanvas loading={loading} /> */}</div>
          </div>
          <div className={styles.right}>{/* <RightPanel /> */}</div>
        </div>
      </div>
    </div>
  )
}
