// import { BrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import { ConfigProvider, App as AntdApp, theme } from 'antd'
import AntdGlobal from './utils/AntdGlobal'
import router from './router'
import { useStore } from './store'
import './App.less'

function App() {
  // return (
  //   <BrowserRouter>
  //     <Router />
  //   </BrowserRouter>
  // )
  const isDark = useStore(state => state.isDark)

  return (
    <ConfigProvider
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
