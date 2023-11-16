import './loading.less'

let count = 0

export const showLoading = () => {
  if (count === 0) {
    const loading = document.getElementById('loading') as HTMLDivElement
    loading.style.setProperty('display', 'flex')
  }
  count++
}

export const hideLoading = () => {
  count--

  if (count === 0) {
    const loading = document.getElementById('loading') as HTMLDivElement
    loading.style.setProperty('display', 'none')
  }
}
