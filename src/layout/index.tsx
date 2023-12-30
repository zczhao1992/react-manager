import React, { useEffect } from 'react'
import { Layout, Watermark } from 'antd'
import { Navigate, Outlet, useLocation, useRouteLoaderData } from 'react-router-dom'
import NavHeader from '@/components/NavHeader'
import NavFooter from '@/components/NavFooter'
import Menu from '@/components/Menu'
import api from '@/api'
import { useUserStore } from '@/store/useUserStore'
import { IAuthLoader } from '@/router/AuthLoader'
import { searchRoute } from '@/utils'
import { routers } from '@/router'
import TabsFC from '@/components/Tabs'
import styles from './index.module.less'

const { Sider } = Layout

const App: React.FC = () => {
  const { collapsed, userInfo, updateUserInfo } = useUserStore()
  const { pathname } = useLocation()

  const getUserInfo = async () => {
    const data = await api.getUserInfo()

    updateUserInfo(data)
  }

  // 权限判断
  const data = useRouteLoaderData('layout') as IAuthLoader
  const route = searchRoute(pathname, routers)
  if (route && route.meta?.auth === false) {
    // 继续执行
  } else {
    const staticPath = ['/welcome', '/403', '/404']
    if (!data.menuPathList.includes(pathname) && !staticPath.includes(pathname)) {
      return <Navigate to='/403' />
    }
  }

  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <Watermark content='Zhao.C'>
      {userInfo._id ? (
        <Layout>
          <Sider collapsed={collapsed}>
            <Menu />
          </Sider>
          <Layout>
            <NavHeader />
            <TabsFC />
            <div className={styles.content}>
              <div className={styles.wrapper}>
                <Outlet></Outlet>
              </div>
              <NavFooter />
            </div>
          </Layout>
        </Layout>
      ) : null}
    </Watermark>
  )
}

export default App
