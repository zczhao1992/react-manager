import React from 'react'
import { createHashRouter, Navigate, useRoutes } from 'react-router-dom'
import Login from '@/views/login/Login'
import Welcome from '@/views/welcome'
import Error403 from '@/views/403'
import Error404 from '@/views/404'
import Layout from '@/layout'
import AuthLoader from './AuthLoader'
import { lazyLoad } from './LazyLoad'

export const routers = [
  {
    path: '/',
    element: <Navigate to='/welcome' />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    id: 'layout',
    element: <Layout />,
    loader: AuthLoader,
    children: [
      {
        path: '/welcome',
        element: <Welcome />
      },
      {
        path: '/dashboard',
        element: lazyLoad(React.lazy(() => import('@/views/dashboard')))
      },
      {
        path: '/userList',
        element: lazyLoad(React.lazy(() => import('@/views/system/user')))
      },
      {
        path: '/deptList',
        element: lazyLoad(React.lazy(() => import('@/views/system/dept')))
      },
      {
        path: '/menuList',
        element: lazyLoad(React.lazy(() => import('@/views/system/menu')))
      },
      {
        path: '/roleList',
        element: lazyLoad(React.lazy(() => import('@/views/system/role')))
      },
      {
        path: '/orderList',
        element: lazyLoad(React.lazy(() => import('@/views/order/OrderList')))
      },
      {
        path: '/cluster',
        element: lazyLoad(React.lazy(() => import('@/views/order/OrderCluster')))
      },
      {
        path: '/driverList',
        element: lazyLoad(React.lazy(() => import('@/views/order/DriverList')))
      },
      {
        path: '/lowcode',
        element: lazyLoad(React.lazy(() => import('@/views/lowcode')))
      },
      {
        path: '/proComponents',
        element: lazyLoad(React.lazy(() => import('@/views/proComponents')))
      },
      {
        path: '/chatGPT',
        element: lazyLoad(React.lazy(() => import('@/views/chatGPT')))
      }
    ]
  },
  {
    path: '/editor/:id',
    element: lazyLoad(React.lazy(() => import('@/views/editor')))
  },
  {
    path: '*',
    element: <Navigate to='/404' />
  },
  {
    path: '/404',
    element: <Error404 />
  },
  {
    path: '/403',
    element: <Error403 />
  }
]

// export default function Router() {
//   return useRoutes(routers)
// }

export default createHashRouter(routers)
