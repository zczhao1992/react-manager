import React, { FC } from 'react'
import { Typography, Input } from 'antd'
import { LowCodeTextareaPropsType, LowCodeTextareaDefaultProps } from './interface'

const { Paragraph } = Typography
const { TextArea } = Input

const LowCodeTextarea: FC<LowCodeTextareaPropsType> = (props: LowCodeTextareaPropsType) => {
  const { title, placeholder } = { ...LowCodeTextareaDefaultProps, ...props }

  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <div>
        <TextArea placeholder={placeholder}></TextArea>
      </div>
    </div>
  )
}

export default LowCodeTextarea
