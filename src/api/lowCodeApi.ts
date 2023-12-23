import request from '@/utils/request'

import { ResultData, LowCode } from '@/types/api'
import '@/_mock/lowCode'

export default {
  // 获取单个表单信息
  getLowCodeService(id: string) {
    return request.get(`/lowcode/${id}`)
  },
  // 创建表单
  createLowCodeService() {
    return request.post<LowCode.LowCodeId>('/lowcode/create')
  },
  // 获取（查询）表单列表
  getLowCodeListService(params: LowCode.LowCodeSearch) {
    return request.get<ResultData<LowCode.LowCodeItem>>('/lowcode/list', params)
  }
}
