import React, { FC } from 'react'
import { Typography } from 'antd'
import { LowCodeTitlePropsType, LowCodeTitleDefaultProps } from './interface'

const { Title } = Typography

const LowCodeTitle: FC<LowCodeTitlePropsType> = (props: LowCodeTitlePropsType) => {
  const { text = '', level = 1, isCenter = false } = { ...LowCodeTitleDefaultProps, ...props }

  const genFontSize = (level: number) => {
    if (level === 1) return '24px'
    if (level === 2) return '20px'
    if (level === 3) return '16px'
    return '16px'
  }

  return (
    <div>
      <Title
        level={level}
        style={{
          textAlign: isCenter ? 'center' : 'start',
          marginBottom: '0',
          fontSize: genFontSize(level)
        }}
      >
        {text}
      </Title>
    </div>
  )
}

export default LowCodeTitle
