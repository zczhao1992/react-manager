import { create } from 'zustand'
import { ComponentPropsType } from '../components/LowCodeComponents/index'

export type ComponentInfoType = {
  fe_id: string
  type: string
  title: string
  isHidden?: boolean
  isLocked?: boolean
  props: ComponentPropsType
}

export type lowCodeStateType = {
  selectedId: string
  componentList: Array<ComponentInfoType>
  copiedComponent: ComponentInfoType | null
  changeSelectedId: (id: string) => void
}

export const useLowCodeStore = create<lowCodeStateType>((set, get) => ({
  selectedId: '',
  componentList: [],
  // 其他扩展
  copiedComponent: null,

  changeSelectedId: (newValue: string) =>
    set({
      selectedId: newValue
    })
}))
