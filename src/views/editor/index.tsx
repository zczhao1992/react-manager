import EditCanvas from './components/EditCanvas'
import EditHeader from './components/EditHeader'
import LeftPanel from './components/LeftPanel'
import RightPanel from './components/RightPanel'
import useEditor from './useEditor'
import { useLowCodeStore } from '@/store/useLowCodeStore'
import styles from './index.module.less'

export default function Editor() {
  // 初始化
  const { loading } = useEditor()

  const { changeSelectedId } = useLowCodeStore()

  const clearSelectedId = () => {
    changeSelectedId('')
  }

  return (
    <div className={styles.container} onClick={clearSelectedId}>
      <EditHeader />
      <div className={styles.content}>
        <div className={styles.left}>
          <LeftPanel />
        </div>
        <div className={styles.main}>
          <div className={styles['canvas-wrapper']}>
            <EditCanvas loading={loading} />
          </div>
        </div>
        <div className={styles.right}>
          <RightPanel />
        </div>
      </div>
    </div>
  )
}
