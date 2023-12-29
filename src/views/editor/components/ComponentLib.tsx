import { FC, useCallback } from 'react'
import { nanoid } from 'nanoid'
import { componentConfGroup, ComponentConfType } from '@/components/LowCodeComponents'
import { Typography } from 'antd'
import { useLowCodeStore } from '@/store/useLowCodeStore'
import styles from './ComponentLib.module.less'

const { Title } = Typography

function GenComponent(c: ComponentConfType) {
  const { title, type, Component, defaultProps } = c
  const { addComponent } = useLowCodeStore()

  const handleClick = useCallback(() => {
    addComponent({
      fe_id: nanoid(), // 前端生成的 id
      title,
      type,
      isHidden: false,
      isLocked: false,
      props: defaultProps
    })
  }, [])

  return (
    <div key={type} className={styles.wrapper} onClick={handleClick}>
      <div className={styles.component}>
        <Component />
      </div>
    </div>
  )
}

const Lib: FC = () => {
  return (
    <div className={styles.listWarp}>
      {componentConfGroup.map((group, index) => {
        const { groupId, groupName, components } = group
        return (
          <div key={groupId}>
            <Title level={3} style={{ fontSize: '16px', marginTop: index > 0 ? '20px' : '0' }}>
              {groupName}
            </Title>
            <div>{components.map(c => GenComponent(c))}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Lib
