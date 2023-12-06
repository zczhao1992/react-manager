export type LowCodeInputPropsType = {
  title?: string
  placeholder?: string

  onChange?: (newProps: LowCodeInputPropsType) => void
  disabled?: boolean
}

export const LowCodeInputDefaultProps: LowCodeInputPropsType = {
  title: '输入框标题',
  placeholder: '请输入...'
}
