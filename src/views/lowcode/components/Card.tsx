import { useNavigate, Link } from 'react-router-dom'
import { Button, Space, Divider, Tag, Popconfirm, Modal } from 'antd'
import { EditOutlined, CopyOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import { LowCode } from '@/types/api'
import styles from './Card.module.less'

const { confirm } = Modal

export default function Card(props: LowCode.LowCodeItem) {
  const nav = useNavigate()
  const { _id, title, createdAt, answerCount, isPublished } = props

  function del() {
    confirm({
      title: '确定删除吗？',
      icon: <ExclamationCircleOutlined />
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.left}>
          <Link to={`/editor/${_id}`}>
            <Space>{title}</Space>
          </Link>
        </div>
        <div className={styles.right}>
          <Space>
            {isPublished ? <Tag color='processing'>已发布</Tag> : <Tag>未发布</Tag>}
            <span>访问: {answerCount}</span>
            <span>{createdAt}</span>
          </Space>
        </div>
      </div>
      <Divider style={{ margin: '12px 0' }} />
      <div className={styles['button-container']}>
        <div className={styles.left}>
          <Space>
            <Button icon={<EditOutlined />} type='text' size='small' onClick={() => nav(`/editor/${_id}`)}>
              编辑
            </Button>
          </Space>
        </div>
        <div className={styles.right}>
          <Space>
            <Popconfirm title='确定复制吗？' okText='确定' cancelText='取消'>
              <Button type='text' icon={<CopyOutlined />} size='small'>
                复制
              </Button>
            </Popconfirm>
            <Button type='text' icon={<DeleteOutlined />} size='small' onClick={del}>
              删除
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}
