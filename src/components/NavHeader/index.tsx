import { useEffect } from 'react'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { Switch, Dropdown } from 'antd'
import { useNavigate } from 'react-router-dom'
import type { MenuProps } from 'antd'
import { useUserStore } from '@/store/useUserStore'
import storage from '@/utils/storage'
import BreadCrumb from './BreadCrumb'
import userImg from '@/assets/images/avatar.png'
import styles from './index.module.less'

const NavHeader = () => {
  const navigate = useNavigate()

  const { userInfo, collapsed, isDark, updateCollapsed, updateTheme } = useUserStore()

  useEffect(() => {
    handleSwitch(isDark)
  }, [])

  const items: MenuProps['items'] = [
    {
      key: 'email',
      label: '邮箱：' + userInfo.userEmail
    },
    {
      key: 'logout',
      label: '退出'
    }
  ]

  // 控制菜单图标关闭和展开
  const toggleCollapsed = () => {
    updateCollapsed()
  }

  const onClick: MenuProps['onClick'] = ({ key }) => {
    if (key === 'logout') {
      storage.remove('token')
      navigate('/login')
      // location.href = '/login?callback=' + encodeURIComponent(location.href)
    }
  }

  const handleSwitch = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.dataset.theme = 'dark'
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.dataset.theme = 'light'
      document.documentElement.classList.remove('dark')
    }
    storage.set('isDark', isDark)
    updateTheme(isDark)
  }

  return (
    <div className={styles.navHeader}>
      <div className={styles.left}>
        <div onClick={toggleCollapsed}>
          {collapsed ? <MenuUnfoldOutlined rev={undefined} /> : <MenuFoldOutlined rev={undefined} />}
        </div>
        <BreadCrumb />
      </div>
      <div className={styles.right}>
        <Switch
          checked={isDark}
          checkedChildren='暗黑'
          unCheckedChildren='默认'
          style={{ marginRight: 10 }}
          onChange={handleSwitch}
        />
        <Dropdown menu={{ items, onClick }} trigger={['click']}>
          <div className={styles.info}>
            <img src={userImg} className={styles.userImg} />
            <span className={styles.nickName}>{userInfo.userName}</span>
          </div>
        </Dropdown>
      </div>
    </div>
  )
}

export default NavHeader
