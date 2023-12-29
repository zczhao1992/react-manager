import { FC } from 'react'
import { Button, Space, Tooltip } from 'antd'
import {
  DeleteOutlined,
  EyeInvisibleOutlined,
  LockOutlined,
  CopyOutlined,
  BlockOutlined,
  UpOutlined,
  DownOutlined,
  UndoOutlined,
  RedoOutlined
} from '@ant-design/icons'
import { useLowCodeStore } from '@/store/useLowCodeStore'
import { ActionCreators as UndoActionCreators } from 'redux-undo'

const EditToolbar: FC = () => {
  const {
    selectedId,
    componentList,
    selectedComponent,
    copiedComponent,
    removeSelectedComponent,
    changeComponentHidden,
    toggleComponentLocked,
    copySelectedComponent,
    pasteCopiedComponent,
    moveComponent
  } = useLowCodeStore()
  const { isLocked } = selectedComponent || {}

  const length = componentList.length
  const selectedIndex = componentList.findIndex(c => c.fe_id === selectedId)
  const isFirst = selectedIndex <= 0 // 第一个
  const isLast = selectedIndex + 1 >= length // 最后一个

  // 删除组件
  function handleDelete() {
    removeSelectedComponent()
  }

  // 隐藏组件
  function handleHidden() {
    changeComponentHidden({ fe_id: selectedId, isHidden: true })
  }

  // 锁定组件
  function handleLock() {
    toggleComponentLocked({ fe_id: selectedId })
  }

  // 复制
  function copy() {
    copySelectedComponent()
  }

  // 粘贴
  function paste() {
    pasteCopiedComponent()
  }

  // 上移
  function moveUp() {
    if (isFirst) return
    moveComponent({ oldIndex: selectedIndex, newIndex: selectedIndex - 1 })
  }

  // 下移
  function moveDown() {
    if (isLast) return
    moveComponent({ oldIndex: selectedIndex, newIndex: selectedIndex + 1 })
  }

  // 撤销
  function undo() {
    UndoActionCreators.undo()
  }

  // 重做
  function redo() {
    UndoActionCreators.redo()
  }

  return (
    <Space>
      <Tooltip title='删除'>
        <Button shape='circle' icon={<DeleteOutlined />} onClick={handleDelete}></Button>
      </Tooltip>
      <Tooltip title='隐藏'>
        <Button shape='circle' icon={<EyeInvisibleOutlined />} onClick={handleHidden}></Button>
      </Tooltip>
      <Tooltip title='锁定'>
        <Button
          shape='circle'
          icon={<LockOutlined />}
          onClick={handleLock}
          type={isLocked ? 'primary' : 'default'}
        ></Button>
      </Tooltip>
      <Tooltip title='复制'>
        <Button shape='circle' icon={<CopyOutlined />} onClick={copy}></Button>
      </Tooltip>
      <Tooltip title='粘贴'>
        <Button shape='circle' icon={<BlockOutlined />} onClick={paste} disabled={copiedComponent == null}></Button>
      </Tooltip>
      <Tooltip title='上移'>
        <Button shape='circle' icon={<UpOutlined />} onClick={moveUp} disabled={isFirst}></Button>
      </Tooltip>
      <Tooltip title='下移'>
        <Button shape='circle' icon={<DownOutlined />} onClick={moveDown} disabled={isLast}></Button>
      </Tooltip>
      <Tooltip title='撤销'>
        <Button shape='circle' icon={<UndoOutlined />} onClick={undo}></Button>
      </Tooltip>
      <Tooltip title='重做'>
        <Button shape='circle' icon={<RedoOutlined />} onClick={redo}></Button>
      </Tooltip>
    </Space>
  )
}

export default EditToolbar
