export type LowCodeInfoPropsType = {
  title?: string
  desc?: string

  // 用于 PropComponent
  onChange?: (newProps: LowCodeInfoPropsType) => void
  disabled?: boolean
}

export const LowCodeInfoDefaultProps: LowCodeInfoPropsType = {
  title: '问卷标题',
  desc: '问卷描述'
}
