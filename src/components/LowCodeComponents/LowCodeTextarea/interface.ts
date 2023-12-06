export type LowCodeTextareaPropsType = {
  title?: string
  placeholder?: string

  onChange?: (newProps: LowCodeTextareaPropsType) => void
  disabled?: boolean
}

export const LowCodeTextareaDefaultProps: LowCodeTextareaPropsType = {
  title: '输入框标题',
  placeholder: '请输入...'
}
