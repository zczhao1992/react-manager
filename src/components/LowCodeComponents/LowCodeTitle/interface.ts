export type LowCodeTitlePropsType = {
  text?: string
  level?: 1 | 2 | 3 | 4 | 5
  isCenter?: boolean

  onChange?: (newProps: LowCodeTitlePropsType) => void
  disabled?: boolean
}

export const LowCodeTitleDefaultProps: LowCodeTitlePropsType = {
  text: '一行标题',
  level: 1,
  isCenter: false
}
