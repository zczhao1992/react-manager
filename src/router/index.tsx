import { createHashRouter, Navigate, useRoutes } from 'react-router-dom'
import Login from '@/views/Login'
import Welcome from '@/views/Welcome'
import Error403 from '@/views/403'
import Error404 from '@/views/404'

const routers = [
  {
    path: '/',
    element: <Welcome />
  },
  {
    path: '/login',
    element: <Login />
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
