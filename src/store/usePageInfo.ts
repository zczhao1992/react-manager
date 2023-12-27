import { create } from 'zustand'

export type PageInfoType = {
  title: string
  desc?: string
  js?: string
  css?: string
  isPublished?: boolean
}

export const usePageInfo = create<PageInfoType>((set, get) => ({
  title: '',
  desc: '',
  js: '',
  css: '',
  isPublished: false,
  // 重置
  resetPageInfo: (state: PageInfoType, action: PayloadAction<PageInfoType>) => {
    return action.payload
  },

  // 修改标题
  changePageTitle: (draft: PageInfoType, action: PayloadAction<string>) => {
    set
  }
}))
