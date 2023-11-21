import React, { useEffect } from 'react'
import { Layout, theme, Watermark } from 'antd'
import { Navigate, Outlet, useLocation, useRouteLoaderData } from 'react-router-dom'
import NavHeader from '@/components/NavHeader'
import NavFooter from '@/components/NavFooter'
import Menu from '@/components/Menu'
import api from '@/api'
import { useStore } from '@/store'
import { IAuthLoader } from '@/router/AuthLoader'
import { searchRoute } from '@/utils'
import { routers } from '@/router'
import TabsFC from '@/components/Tabs'
import styles from './index.module.less'

const { Content, Sider } = Layout

const App: React.FC = () => {
  const { collapsed, userInfo, updateUserInfo } = useStore()
  const { pathname } = useLocation()

  const getUserInfo = async () => {
    // const data = await api.getUserInfo()
    const data = {
      _id: '63bc321300732c27697f203',
      userId: 1000017,
      userName: 'Zhao.C',
      userEmail: 'zczhao1992@163.com',
      deptId: '63bc321300732c27697f203',
      state: 1,
      mobile: '21321312323',
      job: '前端工程师',
      role: 1,
      roleList: '63bc321300732c27697f203',
      createId: 0,
      deptName: '大前端',
      userImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVsiZfWPnJuuZ.png'
    }
    updateUserInfo(data)
  }

  // // 权限判断
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
