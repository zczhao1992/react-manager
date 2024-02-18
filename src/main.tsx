// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@/styles/reset.less'
import './styles/theme.less'
import '@/styles/common.less'
import '@/language/index'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
)
