/**
 * @description 问卷 多行输入
 *
 */

import Component from './Component'
import PropComponent from './PropComponent'
import { LowCodeTextareaDefaultProps } from './interface'

export * from './interface'

// Textarea 组件的配置
export default {
  title: '多行输入',
  type: 'LowCodeTextarea', // 要和后端统一好
  Component, // 画布显示的组件
  PropComponent, // 修改属性
  defaultProps: LowCodeTextareaDefaultProps
}
