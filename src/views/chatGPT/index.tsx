import { Button, Input, Space } from 'antd'
import { SendOutlined } from '@ant-design/icons'
import styles from './index.module.less'

export default function ChatGPT() {
  return (
    <div className={styles.warp}>
      <div className={styles.label}>ChatGPT 3.5</div>

      <div className={styles.chatList}></div>

      <div className={styles.bottom}>
        <Space.Compact style={{ width: '70%' }}>
          <Input placeholder='请输入' />

          <Button type='primary' icon={<SendOutlined />} size={'large'} />
        </Space.Compact>
      </div>
    </div>
  )
}
