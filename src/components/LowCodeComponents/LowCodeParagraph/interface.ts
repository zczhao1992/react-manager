export type LowCodeParagraphPropsType = {
  text?: string
  isCenter?: boolean

  // 用于 PropComponent
  onChange?: (newProps: LowCodeParagraphPropsType) => void
  disabled?: boolean
}

export const LowCodeParagraphDefaultProps: LowCodeParagraphPropsType = {
  text: '一行段落',
  isCenter: false
}
