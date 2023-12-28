import { create } from 'zustand'
import { ComponentPropsType } from '../components/LowCodeComponents/index'
import { LowCode } from '@/types/api'
import { getNextSelectedId } from './utils'

type LowCodeInfoType = {
  title: string // 案例标题
  desc: string // 案例描述
  js: string // 外部js
  css: string // 外部css
  isPublished: boolean // 是否已发布
}

type LowCodeComType = {
  selectedId: string // 当前已选中的组件ID
  componentList: Array<LowCode.LowCodeCompontentType> // 案例组件列表
  copiedComponent: LowCode.LowCodeCompontentType | null // 其他扩展
}

export type lowCodeStateType = {
  title: string // 案例标题
  desc: string // 案例描述
  js: string // 外部js
  css: string // 外部css
  isPublished: boolean // 是否已发布
  selectedId: string // 当前已选中的组件ID
  selectedComponent: LowCode.LowCodeCompontentType // 当前选中的组件内容
  componentList: Array<LowCode.LowCodeCompontentType> // 案例组件列表
  copiedComponent: LowCode.LowCodeCompontentType | null // 其他扩展
  resetPageInfo: (newValue: LowCodeInfoType) => void
  changePageTitle: (title: string) => void
  resetComponents: (newValue: LowCodeComType) => void
  changeSelectedId: (id: string) => void
  addComponent: (newComponent: LowCode.LowCodeCompontentType) => void
  changeComponentProps: (newValue: { fe_id: string; newProps: ComponentPropsType }) => void
  removeSelectedComponent: (draft: { selectedId: string; componentList: Array<LowCode.LowCodeCompontentType> }) => void
}

export const useLowCodeStore = create<lowCodeStateType>((set, get) => ({
  title: '',
  desc: '',
  js: '',
  css: '',
  isPublished: false,
  selectedId: '',
  selectedComponent: {
    fe_id: '',
    type: '',
    title: '',
    isHidden: false,
    isLocked: false,
    props: {}
  },
  componentList: [],
  // 其他扩展
  copiedComponent: null,
  // 单个案例基础配置
  resetPageInfo: newValue => {
    set({ ...newValue })
  },
  // 修改标题
  changePageTitle: (newTitle: string) => {
    set({ title: newTitle })
  },
  // 重置所有组件
  resetComponents: newValue => {
    set({ ...newValue })
  },
  // 修改selectedId
  changeSelectedId: (newValue: string) => {
    set({
      selectedId: newValue
    })
  },
  // 添加新组件
  addComponent: (newComponent: LowCode.LowCodeCompontentType) => {
    const { selectedId, componentList } = get()
    const index = componentList.findIndex(c => c.fe_id === selectedId)

    if (index < 0) {
      // 未选中任何组件
      componentList.push(newComponent)
    } else {
      // 选中了组件，插入到 index 后面
      componentList.splice(index + 1, 0, newComponent)
    }

    set({
      selectedId: newComponent.fe_id,
      componentList
    })
  },
  // 修改组件属性
  changeComponentProps: (newValue: { fe_id: string; newProps: ComponentPropsType }) => {
    const { fe_id, newProps } = newValue

    // 当前要修改属性的这个组件
    const newComponentList = get().componentList.reduce(
      (pre: Array<LowCode.LowCodeCompontentType>, cur: LowCode.LowCodeCompontentType) => {
        if (cur.fe_id === fe_id) {
          cur.props = {
            ...cur.props,
            ...newProps
          }

          pre.push(cur)
        }
        pre.push(cur)
        return pre
      },
      []
    )

    set({
      componentList: newComponentList
    })
  },
  // 删除选中的组件
  removeSelectedComponent: draft => {
    const { componentList = [], selectedId: removedId } = draft

    // 重新计算 selectedId
    const newSelectedId = getNextSelectedId(removedId, componentList)
    draft.selectedId = newSelectedId

    const index = componentList.findIndex(c => c.fe_id === removedId)
    componentList.splice(index, 1)

    set({
      selectedId: newSelectedId,
      componentList
    })
  },
  // 修改组件标题
  changeComponentTitle: (newValue: { fe_id: string; title: string }) => {
    const { title, fe_id } = newValue
    const curComp = get().componentList.find(c => c.fe_id === fe_id)
    if (curComp) curComp.title = title
  }
}))
