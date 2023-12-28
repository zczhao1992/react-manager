import request from '@/utils/request'
import { ResultData, LowCode } from '@/types/api'
import '@/_mock/lowCode'

export default {
  // 获取单个表单信息
  getLowCodeService(id: string) {
    return request.get<LowCode.LowCodeInfo>(`/lowcode/item/${id}`)
  },
  // 创建表单
  createLowCodeService() {
    return request.post<LowCode.LowCodeId>('/lowcode/create')
  },
  // 获取（查询）表单列表
  getLowCodeListService(params: LowCode.LowCodeSearch) {
    return request.get<ResultData<LowCode.LowCodeListItem[]>>('/lowcode/list', params)
  },
  // 更新表单
  updateLowCodeService(id: string, params: LowCode.LowCodeUpdateItem) {
    return request.post(`/lowcode/update/${id}`, params)
  }
}
