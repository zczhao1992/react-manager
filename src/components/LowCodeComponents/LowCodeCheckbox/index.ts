/**
 * @description 问卷 checkbox
 *
 */

import Component from './Component'
import PropComponent from './PropComponent'
import StatComponent from './StatComponent'
import { LowCodeCheckboxDefaultProps } from './interface'

export * from './interface'

export default {
  title: '多选',
  type: 'LowCodeCheckbox', // 要和后端统一好
  Component,
  PropComponent,
  StatComponent,
  defaultProps: LowCodeCheckboxDefaultProps
}
