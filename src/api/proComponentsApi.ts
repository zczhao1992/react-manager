import request from '@/utils/request'
import { ProComponents } from '@/types/api'
import '@/_mock/city'

export default {
  // 获取城市列表
  getCityList() {
    return request.get<ProComponents.CityItem[]>('/city/list')
  }
}
