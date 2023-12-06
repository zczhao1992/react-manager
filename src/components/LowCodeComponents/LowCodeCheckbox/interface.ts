export type OptionType = {
  value: string
  text: string
  checked: boolean
}

export type LowCodeCheckboxPropsType = {
  title?: string
  isVertical?: boolean
  list?: OptionType[]

  // 用于 PropComponent
  onChange?: (newProps: LowCodeCheckboxPropsType) => void
  disabled?: boolean
}

export const LowCodeCheckboxDefaultProps: LowCodeCheckboxPropsType = {
  title: '多选标题',
  isVertical: false,
  list: [
    { value: 'item1', text: '选项1', checked: false },
    { value: 'item2', text: '选项2', checked: false },
    { value: 'item3', text: '选项3', checked: false }
  ]
}

// 统计组件的属性类型
export type LowCodeCheckboxStatPropsType = {
  stat: Array<{ name: string; count: number }>
}
