export type OptionType = {
  value: string
  text: string
}

export type LowCodeRadioPropsType = {
  title?: string
  isVertical?: boolean
  options?: OptionType[]
  value?: string

  // 用于 PropComponent
  onChange?: (newProps: LowCodeRadioPropsType) => void
  disabled?: boolean
}

export const LowCodeRadioDefaultProps: LowCodeRadioPropsType = {
  title: '单选标题',
  isVertical: false,
  options: [
    { value: 'item1', text: '选项1' },
    { value: 'item2', text: '选项2' },
    { value: 'item3', text: '选项3' }
  ],
  value: ''
}

// 统计组件的属性类型
export type LowCodeRadioStatPropsType = {
  stat: Array<{ name: string; count: number }>
}
