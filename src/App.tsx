// import { BrowserRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { RouterProvider } from 'react-router'
import { ConfigProvider, App as AntdApp, theme } from 'antd'
import AntdGlobal from './utils/AntdGlobal'
import { getBrowserLang } from './utils/index'
import router from './router'
import { useUserStore } from './store/useUserStore'
import zhCN from 'antd/lib/locale/zh_CN'
import enUS from 'antd/lib/locale/en_US'
import i18n from 'i18next'
import './App.less'

function App() {
  // return (
  //   <BrowserRouter>
  //     <Router />
  //   </BrowserRouter>
  // )
  const isDark = useUserStore(state => state.isDark)
  const language = useUserStore(state => state.language)
  const updateLanguage = useUserStore(state => state.updateLanguage)

  const [i18nLocale, setI18nLocale] = useState(zhCN)

  // 设置 antd 语言国际化
  const setAntdLanguage = () => {
    if (language && language == 'zh') return setI18nLocale(zhCN)
    if (language && language == 'en') return setI18nLocale(enUS)
    if (getBrowserLang() == 'zh') return setI18nLocale(zhCN)
    if (getBrowserLang() == 'en') return setI18nLocale(enUS)
  }

  useEffect(() => {
    // 全局使用国际化
    i18n.changeLanguage(language || getBrowserLang())
    updateLanguage(language || getBrowserLang())
    setAntdLanguage()
  }, [language])

  return (
    <ConfigProvider
      locale={i18nLocale}
      theme={{
        token: {
          colorPrimary: '#1677ff'
        },
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm
      }}
    >
      <AntdApp>
        <AntdGlobal />
        <RouterProvider router={router} />
      </AntdApp>
    </ConfigProvider>
  )
}

export default App
