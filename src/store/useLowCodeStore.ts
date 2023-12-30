import { create } from 'zustand'
import { nanoid } from 'nanoid'
import cloneDeep from 'lodash.clonedeep'
import { ComponentPropsType } from '../components/LowCodeComponents/index'
import { arrayMove } from '@dnd-kit/sortable'
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
  removeSelectedComponent: () => void
  changeComponentTitle: (newValue: { fe_id: string; title: string }) => void
  changeComponentHidden: (action: { fe_id: string; isHidden: boolean }) => void
  toggleComponentLocked: (action: { fe_id: string }) => void
  copySelectedComponent: () => void
  pasteCopiedComponent: () => void
  selectPrevComponent: () => void
  selectNextComponent: () => void
  moveComponent: (indexObj: { oldIndex: number; newIndex: number }) => void
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
  changeSelectedId: (selId: string) => {
    const selectedComponent = get().componentList.find(c => c.fe_id === selId)

    set({
      selectedId: selId,
      selectedComponent
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
  removeSelectedComponent: () => {
    const { componentList = [], selectedId: removedId } = get()

    // 重新计算 selectedId
    const newSelectedId = getNextSelectedId(removedId, componentList)

    const index = componentList.findIndex(c => c.fe_id === removedId)
    componentList.splice(index, 1)

    set({
      selectedId: newSelectedId,
      componentList
    })
  },
  // 隐藏/显示 组件
  changeComponentHidden: (action: { fe_id: string; isHidden: boolean }) => {
    const { componentList = [] } = get()
    const { fe_id, isHidden } = action

    // 重新计算 selectedId
    let newSelectedId = ''
    if (isHidden) {
      // 要隐藏
      newSelectedId = getNextSelectedId(fe_id, componentList)
    } else {
      // 要显示
      newSelectedId = fe_id
    }
    const newComponentList = componentList.reduce(
      (pre: Array<LowCode.LowCodeCompontentType>, cur: LowCode.LowCodeCompontentType) => {
        if (cur.fe_id === fe_id) {
          cur.isHidden = isHidden
        }
        pre.push(cur)
        return pre
      },
      []
    )

    set({
      selectedId: newSelectedId,
      componentList: newComponentList
    })
  },

  // 锁定/解锁 组件
  toggleComponentLocked: (action: { fe_id: string }) => {
    const { fe_id } = action

    const newComponentList = get().componentList.reduce(
      (pre: Array<LowCode.LowCodeCompontentType>, cur: LowCode.LowCodeCompontentType) => {
        if (cur.fe_id === fe_id) {
          cur.isLocked = !cur.isLocked
        }
        pre.push(cur)
        return pre
      },
      []
    )

    set({ componentList: newComponentList as LowCode.LowCodeCompontentType[] })
  },

  // 拷贝当前选中的组件
  copySelectedComponent: () => {
    const { selectedId, componentList = [] } = get()
    const selectedComponent = componentList.find(c => c.fe_id === selectedId)
    if (selectedComponent == null) return

    console.log('ddddddddd', cloneDeep(selectedComponent))

    set({
      copiedComponent: cloneDeep(selectedComponent) // 深拷贝
    })
  },
  // 粘贴组件
  pasteCopiedComponent: () => {
    const { copiedComponent, selectedId, componentList } = get()
    if (copiedComponent == null) return

    // 要把 fe_id 给修改了，重要！！
    copiedComponent.fe_id = nanoid()

    const index = componentList.findIndex(c => c.fe_id === selectedId)

    if (index < 0) {
      // 未选中任何组件
      componentList.push(copiedComponent)
    } else {
      // 选中了组件，插入到 index 后面
      componentList.splice(index + 1, 0, copiedComponent)
    }

    set({ selectedId: copiedComponent.fe_id, componentList, copiedComponent })
  },
  // 选中上一个
  selectPrevComponent: () => {
    const { selectedId, componentList } = get()
    const selectedIndex = componentList.findIndex(c => c.fe_id === selectedId)

    if (selectedIndex < 0) return // 未选中组件
    if (selectedIndex <= 0) return // 已经选中了第一个，无法在向上选中

    set({
      selectedId: componentList[selectedIndex - 1].fe_id
    })
  },
  // 选中下一个
  selectNextComponent: () => {
    const { selectedId, componentList } = get()
    const selectedIndex = componentList.findIndex(c => c.fe_id === selectedId)

    if (selectedIndex < 0) return // 未选中组件
    if (selectedIndex + 1 === componentList.length) return // 已经选中了最后一个，无法再向下选中

    set({
      selectedId: componentList[selectedIndex + 1].fe_id
    })
  },
  // 修改组件标题
  changeComponentTitle: (newValue: { fe_id: string; title: string }) => {
    const { title, fe_id } = newValue
    const newComponentList = get().componentList.reduce(
      (pre: Array<LowCode.LowCodeCompontentType>, cur: LowCode.LowCodeCompontentType) => {
        if (cur.fe_id === fe_id) {
          cur.title = title
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
  // 移动组件位置
  moveComponent: (indexObj: { oldIndex: number; newIndex: number }) => {
    const { componentList: curComponentList } = get()
    const { oldIndex, newIndex } = indexObj

    const newComponentList = arrayMove(curComponentList, oldIndex, newIndex)

    set({ componentList: newComponentList as LowCode.LowCodeCompontentType[] })
  }
}))
