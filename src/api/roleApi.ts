import request from '@/utils/request'
import { ResultData, Role } from '@/types/api'
export default {
  // 获取角色列表
  getRoleList(params: Role.Params) {
    return request.get<ResultData<Role.RoleItem>>('/roles/list', params)
  },
  // 创建角色
  createRole(params: Role.CreateParams) {
    return request.post('/roles/create', params)
  },
  // 编辑角色
  editRole(params: Role.EditParams) {
    return request.post('/roles/edit', params)
  },
  // 删除角色
  delRole(params: { _id: string }) {
    return request.post('/roles/delete', params)
  },
  // 设置权限
  updatePermission(params: Role.Permission) {
    return request.post('/roles/update/permission', params)
  },
  // 获取所有角色列表
  getAllRoleList() {
    return request.get<Role.RoleItem[]>('/roles/allList')
  }
}
