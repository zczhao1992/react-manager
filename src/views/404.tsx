import { Button, Result } from 'antd'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate()

  const { t } = useTranslation()

  const handleClick = () => {
    navigate('/')
  }

  return (
    <Result
      status='404'
      title='404'
      subTitle={t('result.notFoundPage')}
      extra={
        <Button type='primary' onClick={handleClick}>
          {t('result.backHome')}
        </Button>
      }
    />
  )
}

export default NotFound
