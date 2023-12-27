import { FC, useCallback } from 'react'
import { nanoid } from 'nanoid'
import { componentConfGroup, ComponentConfType } from '../../../components/LowCodeComponents'
import { Typography } from 'antd'
// import { useDispatch } from "react-redux";
// import { addComponent } from "../../../store/componentsReducer";
import styles from './ComponentLib.module.less'

const { Title } = Typography

function GenComponent(c: ComponentConfType) {
  const { title, type, Component, defaultProps } = c
  // const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    // dispatch(
    //   addComponent({
    //     fe_id: nanoid(), // 前端生成的 id
    //     title,
    //     type,
    //     props: defaultProps,
    //   })
    // );
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
    <>
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
    </>
  )
}

export default Lib
