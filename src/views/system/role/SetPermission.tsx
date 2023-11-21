import { Menu, Role } from '@/types/api'
import { IAction, IModalProp } from '@/types/modal'
import { Modal, Form, Tree } from 'antd'
import { useEffect, useImperativeHandle, useState } from 'react'
import api from '@/api/index'
import roleAPi from '@/api/roleApi'
import { message } from '@/utils/AntdGlobal'
export default function SetPermission(props: IModalProp<Role.RoleItem>) {
  const [visible, setVisible] = useState(false)
  const [menuList, setMenuList] = useState<Menu.MenuItem[]>([])
  const [checkedKeys, setCheckedKeys] = useState<string[]>([])
  const [roleInfo, setRoleInfo] = useState<Role.RoleItem>()
  const [permission, setPermission] = useState<Role.Permission>()

  useEffect(() => {
    getMenuList()
  }, [])

  const getMenuList = async () => {
    const menuList = await api.getMenuList()
    setMenuList(menuList)
  }

  // 暴露组件方法
  useImperativeHandle(props.mRef, () => {
    return {
      open
    }
  })
  const open = (type: IAction, data?: Role.RoleItem) => {
    setVisible(true)
    setRoleInfo(data)
    setCheckedKeys(data?.permissionList.checkedKeys || [])
  }

  const onCheck = (checkedKeysValue: any, item: any) => {
    setCheckedKeys(checkedKeysValue)

    const checkedKeys: string[] = []
    const parentKeys: string[] = []
    item.checkedNodes.map((node: Menu.MenuItem) => {
      if (node.menuType === 2) {
        checkedKeys.push(node._id)
      } else {
        parentKeys.push(node._id)
      }
    })
    setPermission({
      _id: roleInfo?._id || '',
      permissionList: {
        checkedKeys,
        halfCheckedKeys: parentKeys.concat(item.halfCheckedKeys)
      }
    })
  }

  const handleOk = async () => {
    if (permission) {
      await roleAPi.updatePermission(permission)
      message.success('权限设置成功')
      handleCancel()
      props.update()
    }
  }

  // 取消
  const handleCancel = () => {
    setVisible(false)
    setPermission(undefined)
  }

  return (
    <Modal
      title='设置权限'
      width={600}
      open={visible}
      okText='确定'
      cancelText='取消'
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form labelAlign='right' labelCol={{ span: 4 }}>
        <Form.Item label='角色名称'>{roleInfo?.roleName}</Form.Item>
        <Form.Item label='权限'>
          <Tree
            checkable
            defaultExpandAll
            fieldNames={{
              title: 'menuName',
              key: '_id',
              children: 'children'
            }}
            onCheck={onCheck}
            checkedKeys={checkedKeys}
            treeData={menuList}
          />
        </Form.Item>
      </Form>
    </Modal>
  )
}
