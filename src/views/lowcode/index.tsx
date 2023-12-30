import { useState, useEffect } from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
// import Card from './components/Card'
import CardNew from './components/CardNew'
import ListSearch from './components/ListSearch'
import { PlusOutlined } from '@ant-design/icons'
import api from '@/api/lowCodeApi'
import styles from './index.module.less'

export default function LowCode() {
  const nav = useNavigate()

  const [list, setList] = useState([])

  const getList = async () => {
    const data = await api.getLowCodeListService({ title: '' })

    setList(data.list as [])
  }

  useEffect(() => {
    getList()
  }, [])

  const handleCreateClick = async () => {
    let data = await api.createLowCodeService()

    nav(`/editor/${data.id}`)
  }

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Button type='primary' size='large' icon={<PlusOutlined />} onClick={handleCreateClick}>
            新建
          </Button>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>

      <div className={styles.content}>
        {/* 列表 */}
        {list.length > 0 &&
          list.map((q: any) => {
            const { _id } = q
            return <CardNew key={_id} {...q} />
          })}
      </div>
    </>
  )
}
