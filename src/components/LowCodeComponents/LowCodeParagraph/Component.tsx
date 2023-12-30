import { FC } from 'react'
import { Typography } from 'antd'
import { LowCodeParagraphPropsType, LowCodeParagraphDefaultProps } from './interface'

const { Paragraph } = Typography

const Component: FC<LowCodeParagraphPropsType> = (props: LowCodeParagraphPropsType) => {
  const { text = '', isCenter = false } = {
    ...LowCodeParagraphDefaultProps,
    ...props
  }

  // 尽量不要使用 dangerouslySetInnerHTML ，不安全

  const textList = text.split('\n') // 例如 ['hello', '123', '456']

  return (
    <Paragraph style={{ textAlign: isCenter ? 'center' : 'start', marginBottom: '0' }}>
      {textList.map((t, index) => (
        <span key={index}>
          {index > 0 && <br />}
          {t}
        </span>
      ))}
    </Paragraph>
  )
}

export default Component
