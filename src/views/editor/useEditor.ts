import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import api from '@/api/lowCodeApi'
import { useLowCodeStore } from '@/store/useLowCodeStore'

function useEditor() {
  const { id = '' } = useParams()

  const { resetPageInfo, resetComponents } = useLowCodeStore()

  const { loading, data, error, run } = useRequest(
    async (id: string) => {
      if (!id) throw new Error('没有问卷 id')
      const data = await api.getLowCodeService(id)

      return data
    },
    {
      manual: true
    }
  )

  // 根据获取的data
  useEffect(() => {
    if (!data) return

    const { title = '', desc = '', js = '', css = '', isPublished = false, componentList = [] } = data

    // 获取默认的 selectedId
    let selectedId = ''
    if (componentList.length > 0) {
      selectedId = componentList[0].fe_id // 默认选中第一个组件
    }

    // 把 componentList 存储到store 中
    resetComponents({ componentList, selectedId, copiedComponent: null })

    // 把 pageInfo 存储到 store
    resetPageInfo({ title, desc, js, css, isPublished })
  }, [data])

  // 判断id变化，执行ajax加载数据
  useEffect(() => {
    run(id)
  }, [id])

  return { loading, error }
}

export default useEditor
