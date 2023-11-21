import { useState } from 'react'
import { useStore } from '@/store'
import { Button, Form, Input, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import loginLeft from '@/assets/images/login_left.png'
import api from '@/api'
import logo from '@/assets/images/logo.png'
import { Login } from '@/types/api'
import storage from '@/utils/storage'
import styles from './index.module.less'

export default function LoginFC() {
  const [loading, setLoading] = useState(false)

  const updateToken = useStore(state => state.updateToken)
  const onFinish = async (values: Login.params) => {
    console.log(values)
    try {
      setLoading(true)
      // const data = await api.login(values)
      const data =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjYzYmMzMWM4MzAwNzMyYzI3Njk3ZjFmZCIsInVzZXJJZCI6MTAwMDAxNiwidXNlck5hbWUiOiJKYWNrTWEiLCJ1c2VyRW1haWwiOiJkZW1vQG1hcnMuY29tIiwiZGVwdElkIjoiNjNiYzA5ZmUxYTAwY2U3NGVlYjMzMzExIiwic3RhdGUiOjEsInJvbGUiOjIsInJvbGVMaXN0IjoiNjNiYzMxNzUzMDA3MzJjMjc2OTdmMWRmIiwiZGVwdE5hbWUiOiLlpKfliY3nq68iLCJ1c2VySW1nIjoiaHR0cDovL2FwaS1kcml2ZXIubWFyc3ZpZXcuY2MvYWEwNjUyZDAxM2EyMTc2YmZhYWFmMmMwMC5qcGVnIiwiam9iIjoi5YmN56uv5bel56iL5biIIiwibW9iaWxlIjoiMTg2MTA5OTY2NiIsImNyZWF0ZUlkIjoxMDAwMDAyfSwiaWF0IjoxNzAwNTQ2MzkxLCJleHAiOjE3MDA1Njc5OTF9.6_P2HZJtnFDGWiFmNS3mdc3amXKiRAPdlNZGUBA9nc8'

      setLoading(false)
      storage.set('token', data)
      updateToken(data)
      message.success('登录成功')
      const params = new URLSearchParams(location.search)
      setTimeout(() => {
        location.href = params.get('callback') || '/welcome'
      })
    } catch (error) {
      setLoading(false)
    }
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <div className={styles.loginLeft}>
          <img src={loginLeft} alt='login' />
        </div>
        <div className={styles.loginForm}>
          <div className={styles.loginLogo}>
            <img className={styles.loginIcon} src={logo} alt='logo' />
            <span className={styles.loginText}>行业毒瘤系统</span>
          </div>

          <div className={styles.loginWrapper}>
            <Form
              name='basic'
              initialValues={{ userName: 'admin', userPwd: '123456', remember: true }}
              onFinish={onFinish}
              autoComplete='off'
            >
              <Form.Item name='userName' rules={[{ required: true, message: '请输入用户名！' }]}>
                <Input placeholder='用户名：admin / user' prefix={<UserOutlined />} />
              </Form.Item>

              <Form.Item name='userPwd' rules={[{ required: true, message: '请输入密码！' }]}>
                <Input.Password autoComplete='new-password' placeholder='密码：123456' prefix={<LockOutlined />} />
              </Form.Item>

              <Form.Item>
                <Button type='primary' block htmlType='submit' loading={loading}>
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}
