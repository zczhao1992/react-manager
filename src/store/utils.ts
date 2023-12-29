// import { ComponentInfoType, lowCodeStateType } from './useLowCodeStore'
import { LowCode } from '@/types/api'
/**
 * 获取下一个 selectedId
 * @param fe_id 当前的 id
 * @param componentList 组件列表
 */
export function getNextSelectedId(fe_id: string, componentList: Array<LowCode.LowCodeCompontentType>) {
  const visibleComponentList = componentList.filter(c => !c.isHidden)
  const index = visibleComponentList.findIndex(c => c.fe_id === fe_id)
  if (index < 0) return ''
  // 重新计算 selectedId
  let newSelectedId = ''
  const length = visibleComponentList.length
  if (length <= 1) {
    // 组件长度就一个，被删除了，就没有组件
    newSelectedId = ''
  } else {
    // 组件长度 > 1
    if (index + 1 === length) {
      // 要删除最后一个，就要选中上一个
      newSelectedId = visibleComponentList[index - 1].fe_id
    } else {
      // 要删除的不是最后一个，删除以后，选中下一个
      newSelectedId = visibleComponentList[index + 1].fe_id
    }
  }
  return newSelectedId
}
