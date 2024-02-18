import { create } from 'zustand'
import { User } from '@/types/api'
import storage from '@/utils/storage'

export const useUserStore = create<{
  token: string
  userInfo: User.UserItem
  collapsed: boolean
  isDark: boolean
  language: string
  updateToken: (token: string) => void
  updateLanguage: (lang: string) => void
  updateUserInfo: (userInfo: User.UserItem) => void
  updateCollapsed: () => void
  updateTheme: (isDark: boolean) => void
}>(set => ({
  token: '',
  userInfo: {
    _id: '',
    userId: 0,
    userName: '',
    userEmail: '',
    deptId: '',
    state: 0,
    mobile: '',
    job: '',
    role: 0,
    roleList: '',
    createId: 0,
    deptName: '',
    userImg: ''
  },
  language: 'zh',
  collapsed: false,
  isDark: storage.get('isDark') || false,
  updateToken: token => set({ token }),
  updateTheme: isDark => set({ isDark }),
  updateUserInfo: (userInfo: User.UserItem) => set({ userInfo }),
  updateCollapsed: () =>
    set(state => {
      return {
        collapsed: !state.collapsed
      }
    }),
  updateLanguage: language => set({ language })
}))
