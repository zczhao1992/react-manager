/**
 * @description 问卷 标题
 *
 */

import Component from './Component'
import PropComponent from './PropComponent'
import { LowCodeTitleDefaultProps } from './interface'

export * from './interface'

// Title 组件的配置
export default {
  title: '标题',
  type: 'LowCodeTitle', // 要和后端统一好
  Component,
  PropComponent,
  defaultProps: LowCodeTitleDefaultProps
}
