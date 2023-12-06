import React, { FC } from 'react'
import { Typography, Space, Checkbox } from 'antd'
import { LowCodeCheckboxDefaultProps, LowCodeCheckboxPropsType } from './interface'

const { Paragraph } = Typography

const Component: FC<LowCodeCheckboxPropsType> = (props: LowCodeCheckboxPropsType) => {
  const { title, isVertical, list = [] } = { ...LowCodeCheckboxDefaultProps, ...props }

  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <Space direction={isVertical ? 'vertical' : 'horizontal'}>
        {list.map(opt => {
          const { value, text, checked } = opt
          return (
            <Checkbox key={value} value={value} checked={checked}>
              {text}
            </Checkbox>
          )
        })}
      </Space>
    </div>
  )
}

export default Component
