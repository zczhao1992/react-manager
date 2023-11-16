import axios, { AxiosError } from 'axios'
import { message } from 'antd'
import { showLoading, hideLoading } from './loading'

// 创建实例
const instance = axios.create({
  baseURL: '/test',
  timeout: 8000,
  timeoutErrorMessage: '请求超时，请稍后再试',
  withCredentials: true
})

// 请求拦截器
instance.interceptors.request.use(
  config => {
    showLoading()

    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = 'Token::' + token
    }

    return {
      ...config
    }
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  response => {
    const data = response.data
    hideLoading()

    if (data.code === 500001) {
      message.error(data.msg)
      localStorage.removeItem('token')
      location.href = '/login'
    } else if (data.code != 0) {
      message.error(data.msg)
      return Promise.reject(data)
    }
    return data.data
  },
  error => {
    hideLoading()
    message.error(error.message)
    return Promise.reject(error.message)
  }
)

export default {
  get(url: string, params: any) {
    return instance.get(url, { params })
  },
  post(url: string, params: any) {
    return instance.get(url, params)
  }
}
