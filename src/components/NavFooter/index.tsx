import styles from './index.module.less'

const NavFooter = () => {
  return (
    <div className={styles.footer}>
      <div>
        <a href='https://github.com/zczhao1992' target='_blank' rel='noreferrer'>
          zc github主页
        </a>
        <span className='gutter'>|</span>
        <span> 2023 © React-Manager By ZC.</span>
      </div>
    </div>
  )
}

export default NavFooter
