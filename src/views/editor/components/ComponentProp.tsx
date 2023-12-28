import { FC } from 'react'
import { useLowCodeStore } from '@/store/useLowCodeStore'
import { getComponentConfByType, ComponentPropsType } from '@/components/LowCodeComponents'

const NoProp: FC = () => {
  return <div style={{ textAlign: 'center' }}>未选中组件</div>
}

const ComponentProp: FC = () => {
  const { selectedComponent, changeComponentProps } = useLowCodeStore()

  if (selectedComponent == null) return <NoProp />

  const { type, props, isLocked, isHidden } = selectedComponent
  const componentConf = getComponentConfByType(type)
  if (componentConf == null) return <NoProp />

  function changeProps(newProps: ComponentPropsType) {
    if (selectedComponent == null) return
    const { fe_id } = selectedComponent
    changeComponentProps({ fe_id, newProps })
  }

  const { PropComponent } = componentConf
  return <PropComponent {...props} onChange={changeProps} disabled={isLocked || isHidden} />
}

export default ComponentProp
