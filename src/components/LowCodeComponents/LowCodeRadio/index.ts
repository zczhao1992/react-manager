/**
 * @description 问卷 radio
 *
 */

import Component from './Component'
import PropComponent from './PropComponent'

import { LowCodeRadioDefaultProps } from './interface'

export * from './interface'

export default {
  title: '单选',
  type: 'LowCodeRadio',
  Component,
  PropComponent,
  defaultProps: LowCodeRadioDefaultProps
}
