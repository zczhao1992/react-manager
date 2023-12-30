import { useState } from 'react'
import { Card, Space } from 'antd'
import CitySelect from '@/components/CitySelect'
import styles from './index.module.less'

export default function ProComponents() {
  const [cityData, setCityData] = useState({})
  const initValue = {
    area: ['130104', '120105', '120116'],
    city: ['130100', '120100'],
    province: ['120000', '130000']
  }
  const onSelectChange = (val: any) => {
    setCityData(val)
  }
  return (
    <div className={styles.warp}>
      <Space direction='vertical' size={16}>
        <Card title='省市区选择' style={{ width: 900 }}>
          <CitySelect value={initValue} onChange={val => onSelectChange(val)} />

          <div>{JSON.stringify(cityData)}</div>
        </Card>
      </Space>
      <h2>待补充。。。</h2>
    </div>
  )
}
