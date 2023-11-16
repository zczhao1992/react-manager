import { Spin } from 'antd'
import './loading.less'

export default function Loading({ tip = 'Loading' }: { tip?: string }) {
  return (
    <Spin tip={tip} size='large' className='request-loading'>
      <div className='content' />
    </Spin>
  )
}
