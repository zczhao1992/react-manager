import { useState } from 'react'
import { useUserStore } from '@/store/useUserStore'
import { Button, Form, Input, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import loginLeft from '@/assets/images/login_left.png'
import { useNavigate } from 'react-router-dom'
import api from '@/api'
import logo from '@/assets/images/logo.png'
import { Login } from '@/types/api'
import storage from '@/utils/storage'
import { useTranslation } from 'react-i18next'
import styles from './index.module.less'

export default function LoginFC() {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const { t } = useTranslation()

  const updateToken = useUserStore(state => state.updateToken)

  const onFinish = async (values: Login.params) => {
    try {
      setLoading(true)
      const data = await api.login(values)

      setLoading(false)
      storage.set('token', data)
      updateToken(data)
      message.success(t('login.success'))
      // const params = new URLSearchParams(location.search)
      setTimeout(() => {
        // location.href = params.get('callback') || '/welcome'
        navigate('/welcome')
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
            <span className={styles.loginText}>React-Manager</span>
          </div>

          <div className={styles.loginWrapper}>
            <Form
              name='basic'
              initialValues={{ userName: 'admin', userPwd: '123456', remember: true }}
              onFinish={onFinish}
              autoComplete='off'
            >
              <Form.Item name='userName' rules={[{ required: true, message: t('login.userNameRuleMes') }]}>
                <Input placeholder={`${t('login.username')}: admin / user`} prefix={<UserOutlined />} />
              </Form.Item>

              <Form.Item name='userPwd' rules={[{ required: true, message: t('login.passwordRuleMes') }]}>
                <Input.Password
                  autoComplete='new-password'
                  placeholder={`${t('login.password')}: 123456`}
                  prefix={<LockOutlined />}
                />
              </Form.Item>

              <Form.Item>
                <Button type='primary' block htmlType='submit' loading={loading}>
                  {t('login.confirm')}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}
