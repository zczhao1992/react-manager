/**
 * @description 问卷 - 段落
 *
 */

import Component from './Component'
import PropComponent from './PropComponent'
import { LowCodeParagraphDefaultProps } from './interface'

export * from './interface'

// Paragraph 组件的配置
export default {
  title: '段落',
  type: 'LowCodeParagraph', // 要和后端统一好
  Component,
  PropComponent,
  defaultProps: LowCodeParagraphDefaultProps
}
