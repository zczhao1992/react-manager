import { useState } from 'react'
import { Button, Form, Input, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import loginLeft from '@/assets/images/login_left.png'
import logo from '@/assets/images/logo.png'
import styles from './index.module.less'

export default function Login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <div className={styles.loginLeft}>
          <img src={loginLeft} alt='login' />
        </div>
        <div className={styles.loginForm}>
          <div className={styles.loginLogo}>
            <img className={styles.loginIcon} src={logo} alt='logo' />
            <span className={styles.loginText}>后台管理系统</span>
          </div>

          <div className={styles.loginWrapper}>
            <Form name='basic' initialValues={{ remember: true }} autoComplete='off'>
              <Form.Item name='userName' rules={[{ required: true, message: '请输入用户名！' }]}>
                <Input placeholder='用户名：admin / user' prefix={<UserOutlined />} />
              </Form.Item>

              <Form.Item name='userPwd' rules={[{ required: true, message: '请输入密码！' }]}>
                <Input.Password autoComplete='new-password' placeholder='密码：123456' prefix={<LockOutlined />} />
              </Form.Item>

              <Form.Item>
                <Button type='primary' block htmlType='submit'>
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
