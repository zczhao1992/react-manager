import { create } from 'zustand'

type lowCodeStateType = {
  token: string
  collapsed: boolean
}

export const useLowCodeStore = create<lowCodeStateType>(set => ({
  token: '',

  collapsed: false,

  updateCollapsed: () =>
    set(state => {
      return {
        collapsed: !state.collapsed
      }
    })
}))
