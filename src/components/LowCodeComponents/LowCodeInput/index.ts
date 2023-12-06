/**
 * 问卷 输入框
 *
 *
 */

import Component from './Component'
import PropComponent from './PropComponent'
import { LowCodeInputDefaultProps } from './interface'

export * from './interface'

// Input 组件的配置
export default {
  title: '输入框',
  type: 'LowCodeInput', // 要和后端统一好
  Component, // 画布显示的组件
  PropComponent,
  defaultProps: LowCodeInputDefaultProps
}
