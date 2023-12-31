import { FC, useState, ChangeEvent } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Typography, Space, Input, message } from 'antd'
import { useRequest, useKeyPress, useDebounceEffect } from 'ahooks'
import EditToolbar from './EditToolbar'
import { LeftOutlined, EditOutlined, LoadingOutlined } from '@ant-design/icons'
import api from '@/api/lowCodeApi'
import { useLowCodeStore } from '@/store/useLowCodeStore'
import styles from './EditHeader.module.less'

const { Title } = Typography

// 显示和修改标题
const TitleElem: FC = () => {
  const { title, changePageTitle } = useLowCodeStore()
  const [editState, SetEditState] = useState(false)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const newTitle = event.target.value.trim()
    if (!newTitle) return
    changePageTitle(newTitle)
  }

  if (editState) {
    return (
      <Input
        value={''}
        onChange={handleChange}
        onPressEnter={() => SetEditState(false)}
        onBlur={() => SetEditState(false)}
      />
    )
  }

  return (
    <Space>
      <Title>{title}</Title>
      <Button icon={<EditOutlined />} type='text' onClick={() => SetEditState(true)} />
    </Space>
  )
}

// 保存按钮
const SaveButton: FC = () => {
  const { id } = useParams()

  const { componentList = [], title, desc, js, css, isPublished } = useLowCodeStore()

  const { loading, run: save } = useRequest(
    async () => {
      if (!id) return
      await api.updateLowCodeService(id, { title, desc, js, css, isPublished, componentList })
    },
    { manual: true }
  )

  // 快捷键
  useKeyPress(['ctrl.s', 'meta.s'], (event: KeyboardEvent) => {
    event.preventDefault()
    if (!loading) save()
  })

  // 自定保存（不是定期保存，不是定时器）
  useDebounceEffect(
    () => {
      save()
    },
    [componentList],
    {
      wait: 1000
    }
  )

  return (
    <Button onClick={save} disabled={loading} icon={loading ? <LoadingOutlined /> : null}>
      保存
    </Button>
  )
}

// 发布按钮
const PublishButton: FC = () => {
  const nav = useNavigate()
  const { id } = useParams()

  const { componentList = [], title, desc, js, css } = useLowCodeStore()

  const { loading, run: pub } = useRequest(
    async () => {
      if (!id) return
      await api.updateLowCodeService(id, {
        title,
        desc,
        js,
        css,
        componentList,
        isPublished: true // 标志着问卷已经被发布
      })
    },
    {
      manual: true,
      onSuccess() {
        message.success('发布成功')
        nav(-1) // 发布成功，跳转到列表页面
      }
    }
  )

  return (
    <Button type='primary' onClick={pub} disabled={loading}>
      发布
    </Button>
  )
}

export default function EditHeader() {
  const nav = useNavigate()

  return (
    <div className={styles['header-wrapper']}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Space>
            <Button type='link' icon={<LeftOutlined />} onClick={() => nav(-1)}>
              返回
            </Button>
            <TitleElem />
          </Space>
        </div>
        <div className={styles.main}>
          <EditToolbar />
        </div>
        <div className={styles.right}>
          <Space>
            <SaveButton />
            <PublishButton />
          </Space>
        </div>
      </div>
    </div>
  )
}
