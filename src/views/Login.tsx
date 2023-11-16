import { useEffect } from 'react'
import request from '@/utils/request'

export default function Login() {
  useEffect(() => {
    request.post('/users/login', {
      id: 123213
    })
  }, [])

  return <div>Login</div>
}
