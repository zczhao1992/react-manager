import { Role } from '@/types/api'
import { IAction, IModalProp } from '@/types/modal'
import { Modal, Form, Input } from 'antd'
import { useImperativeHandle, useState } from 'react'
import api from '@/api/roleApi'
import { message } from '@/utils/AntdGlobal'
export default function CreateRole(props: IModalProp<Role.RoleItem>) {
  const [visible, setVisible] = useState(false)
  const [action, setAction] = useState<IAction>('create')
  const [form] = Form.useForm()
  // 暴露组件方法
  useImperativeHandle(props.mRef, () => {
    return {
      open
    }
  })
  const open = (type: IAction, data?: Role.RoleItem) => {
    setAction(type)
    setVisible(true)
    if (data) {
      form.setFieldsValue(data)
    }
  }
  // 提交
  const handleOk = async () => {
    const valid = await form.validateFields()
    if (valid) {
      const params = form.getFieldsValue()
      if (action === 'create') {
        await api.createRole(params)
      } else {
        await api.editRole(params)
      }
      message.success('操作成功')
      handleCancel()
      props.update()
    }
  }
  // 取消
  const handleCancel = () => {
    form.resetFields()
    setVisible(false)
  }
  return (
    <Modal
      title={action === 'create' ? '新增角色' : '编辑角色'}
      width={600}
      open={visible}
      okText='确定'
      cancelText='取消'
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form form={form} labelAlign='right' labelCol={{ span: 4 }}>
        <Form.Item name='_id' hidden>
          <Input />
        </Form.Item>
        <Form.Item
          name='roleName'
          label='角色名称'
          rules={[
            {
              required: true,
              message: '请输入角色名称'
            }
          ]}
        >
          <Input placeholder='请输入角色名称' />
        </Form.Item>
        <Form.Item name='remark' label='备注'>
          <Input.TextArea placeholder='请输入备注' />
        </Form.Item>
      </Form>
    </Modal>
  )
}
