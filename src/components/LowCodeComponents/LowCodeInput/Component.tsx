import { FC } from 'react'
import { Typography, Input } from 'antd'
import { LowCodeInputPropsType, LowCodeInputDefaultProps } from './interface'

const { Paragraph } = Typography

const LowCodeInput: FC<LowCodeInputPropsType> = (props: LowCodeInputPropsType) => {
  const { title, placeholder } = { ...LowCodeInputDefaultProps, ...props }

  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <div>
        <Input placeholder={placeholder}></Input>
      </div>
    </div>
  )
}

export default LowCodeInput
