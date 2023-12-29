import { useNavigate } from 'react-router-dom'
import { Button, message, Tag, Modal } from 'antd'
import { StarOutlined, CopyOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import { LowCode } from '@/types/api'
import styles from './Card.module.less'

const { confirm } = Modal

export default function CardNew(props: LowCode.LowCodeListItem) {
  const nav = useNavigate()

  const [messageApi, contextHolder] = message.useMessage()

  const { _id, title, desc, imgSrc, createdAt, answerCount, isPublished } = props

  const del = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    confirm({
      title: '确定删除吗？',
      icon: <ExclamationCircleOutlined />
    })
  }

  const copy = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    messageApi.open({
      type: 'success',
      content: '复制成功！'
    })
  }

  const start = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    messageApi.open({
      type: 'success',
      content: '标星成功！'
    })
  }
  const toEditor = () => {
    nav(`/editor/${_id}`)
  }

  return (
    <div className={styles.card} onClick={toEditor}>
      {contextHolder}
      <div className={styles.image}>
        <img src={imgSrc} alt='' />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          <h4>{title}</h4>
          {isPublished ? <Tag color='processing'>已发布</Tag> : <Tag>未发布</Tag>}
        </div>

        <div className={styles.description}>{desc}</div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.createTime}>{createdAt}</div>
        <div className={styles.btn}>
          <Button shape='circle' icon={<StarOutlined />} onClick={e => start(e)}></Button>
          <Button shape='circle' icon={<CopyOutlined />} style={{ marginLeft: '10px' }} onClick={e => copy(e)}></Button>
          <Button
            shape='circle'
            icon={<DeleteOutlined />}
            style={{ marginLeft: '10px' }}
            onClick={e => del(e)}
          ></Button>
        </div>
      </div>
    </div>
  )
}
