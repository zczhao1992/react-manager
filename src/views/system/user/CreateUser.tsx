import { Modal, Form, Input, Select, Upload, TreeSelect } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { useEffect, useImperativeHandle, useState } from 'react'
import storage from '@/utils/storage'
import { message } from '@/utils/AntdGlobal'
import type { UploadChangeParam } from 'antd/es/upload'
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface'
import { IAction, IModalProp } from '@/types/modal'
import { Dept, Role, User } from '@/types/api'
import api from '@/api'
import roleApi from '@/api/roleApi'

const CreateUser = (props: IModalProp) => {
  const [form] = Form.useForm()
  const [visible, setVisbile] = useState(false)
  const [action, setAction] = useState<IAction>('create')
  const [img, setImg] = useState('')
  const [loading, setLoading] = useState(false)
  const [deptList, setDeptList] = useState<Dept.DeptItem[]>([])
  const [roleList, setRoleList] = useState<Role.RoleItem[]>([])
  useEffect(() => {
    getDeptList()
    getRoleList()
  }, [])

  // 获取部门列表
  const getDeptList = async () => {
    // const list = await api.getDeptList()
    const list: Dept.DeptItem[] = [
      {
        _id: '62408933dc01fb458d000efb',
        parentId: '',
        updateTime: '2022-04-04T11:30:08.002Z',
        createTime: '2021-05-09T10:12:23.576Z',
        deptName: '研发部',
        userId: '1000002',
        userName: 'admin',
        userEmail: 'admin@mars.com',
        __v: 0,
        createId: 1000002,
        children: [
          {
            _id: '63bc09fe1a00ce74eeb33311',
            deptName: '大前端',
            userName: 'admin',
            parentId: '62408933dc01fb458d000efb',
            updateTime: '2023-01-09T12:33:50.177Z',
            createTime: '2023-01-09T12:33:50.177Z',
            __v: 0,
            createId: 1000002
          },
          {
            _id: '63bc31a5300732c27697f1f1',
            deptName: '后端',
            userName: 'admin',
            parentId: '62408933dc01fb458d000efb',
            updateTime: '2023-01-09T13:45:39.875Z',
            createTime: '2023-01-09T13:45:39.875Z',
            __v: 0,
            createId: 1000002
          },
          {
            _id: '63bc31ae300732c27697f1f4',
            deptName: '测试',
            userName: 'admin',
            parentId: '62408933dc01fb458d000efb',
            updateTime: '2023-01-09T13:45:39.875Z',
            createTime: '2023-01-09T13:45:39.875Z',
            __v: 0,
            createId: 1000002
          },
          {
            _id: '63ecec3ecd258338c1a013d5',
            deptName: '产品',
            userName: '陈书婷',
            parentId: '62408933dc01fb458d000efb',
            updateTime: '2023-02-15T10:50:05.991Z',
            createTime: '2023-02-15T10:50:05.991Z',
            __v: 0,
            createId: 1000002
          }
        ]
      },
      {
        _id: '63ecebfacd258338c1a013d1',
        deptName: '市场部',
        userName: '老默',
        updateTime: '2023-02-15T14:38:30.302Z',
        createTime: '2023-02-15T10:50:05.991Z',
        __v: 0,
        parentId: '',
        createId: 1000002,
        children: [
          {
            _id: '63ecee84b58729211daea5bb',
            deptName: '运营专员',
            userName: '疯驴子',
            parentId: '63ecebfacd258338c1a013d1',
            updateTime: '2023-02-15T14:32:25.879Z',
            createTime: '2023-02-15T14:32:25.879Z',
            __v: 0,
            createId: 1000002
          }
        ]
      },
      {
        _id: '63eced12b58729211daea580',
        deptName: '财务部',
        userName: '陈书婷',
        parentId: '',
        updateTime: '2023-02-15T14:32:25.879Z',
        createTime: '2023-02-15T14:32:25.879Z',
        __v: 0,
        createId: 1000002,
        children: [
          {
            _id: '63ecee93b58729211daea5be',
            deptName: '财务专员',
            userName: '陈书婷',
            parentId: '63eced12b58729211daea580',
            updateTime: '2023-02-15T14:32:25.879Z',
            createTime: '2023-02-15T14:32:25.879Z',
            __v: 0,
            createId: 1000002
          }
        ]
      }
    ]
    setDeptList(list)
  }

  // 获取角色列表
  const getRoleList = async () => {
    // const list = await roleApi.getAllRoleList()

    const list: Role.RoleItem[] = [
      {
        _id: '609781c15ccd183084f8ea3e',
        roleName: '产品经理'
      },
      {
        _id: '63bc3175300732c27697f1df',
        roleName: '研发'
      },
      {
        _id: '63bc3187300732c27697f1e6',
        roleName: '测试'
      },
      {
        _id: '63fe19d503b115e52a6ac6fe',
        roleName: '研发经理'
      },
      {
        _id: '63fe19eb03b115e52a6ac707',
        roleName: '市场部'
      },
      {
        _id: '63fe19f303b115e52a6ac70b',
        roleName: '运营部专用'
      }
    ]
    setRoleList(list)
  }

  // 暴露子组件open方法
  useImperativeHandle(props.mRef, () => {
    return {
      open
    }
  })

  // 调用弹框显示方法
  const open = (type: IAction, data?: User.UserItem) => {
    setAction(type)
    setVisbile(true)
    if (type === 'edit' && data) {
      form.setFieldsValue(data)
      setImg(data.userImg)
    }
  }

  const handleSubmit = async () => {
    const valid = await form.validateFields()
    console.log(valid)
    if (valid) {
      const params = {
        ...form.getFieldsValue(),
        userImg: img
      }
      if (action === 'create') {
        // await api.createUser(params)
        message.success('创建成功')
      } else {
        // await api.editUser(params)
        message.success('修改成功')
      }
      handleCancel()
      props.update()
    }
  }
  const handleCancel = () => {
    setVisbile(false)
    setImg('')
    form.resetFields()
  }

  // 上传之前，接口处理
  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
      message.error('只能上传png或jpeg格式的图片')
      return false
    }
    const isLt500K = file.size / 1024 / 1024 < 0.5
    if (!isLt500K) {
      message.error('图片不能超过500K')
    }
    return isJpgOrPng && isLt500K
  }

  // 上传后，图片处理
  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return
    }

    if (info.file.status === 'done') {
      setLoading(false)
      const { code, data, msg } = info.file.response
      if (code === 0) {
        setImg(data.file)
      } else {
        message.error(msg)
      }
    } else if (info.file.status === 'error') {
      message.error('服务器异常，请稍后重试')
    }
  }
  return (
    <Modal
      title={action === 'create' ? '创建用户' : '编辑用户'}
      okText='确定'
      cancelText='取消'
      width={800}
      open={visible}
      onOk={handleSubmit}
      onCancel={handleCancel}
    >
      <Form form={form} labelCol={{ span: 4 }} labelAlign='right'>
        <Form.Item name='userId' hidden>
          <Input />
        </Form.Item>
        <Form.Item
          label='用户名称'
          name='userName'
          rules={[
            { required: true, message: '请输入用户名称' },
            { min: 5, max: 12, message: '用户名称最小5个字符，最大12个字符' }
          ]}
        >
          <Input placeholder='请输入用户名称'></Input>
        </Form.Item>
        <Form.Item
          label='用户邮箱'
          name='userEmail'
          rules={[
            { required: true, message: '请输入用户邮箱' },
            { type: 'email', message: '请输入正确的邮箱' },
            {
              pattern: /^\w+@mars.com$/,
              message: '邮箱必须以@mars.com结尾'
            }
          ]}
        >
          <Input placeholder='请输入用户邮箱' disabled={action === 'edit'}></Input>
        </Form.Item>
        <Form.Item
          label='手机号'
          name='mobile'
          rules={[
            { len: 11, message: '请输入11位手机号' },
            { pattern: /1[1-9]\d{9}/, message: '请输入1开头的11位手机号' }
          ]}
        >
          <Input type='number' placeholder='请输入手机号'></Input>
        </Form.Item>
        <Form.Item
          label='部门'
          name='deptId'
          rules={[
            {
              required: true,
              message: '请选择部门'
            }
          ]}
        >
          <TreeSelect
            placeholder='请选择部门'
            allowClear
            treeDefaultExpandAll
            showCheckedStrategy={TreeSelect.SHOW_ALL}
            fieldNames={{ label: 'deptName', value: '_id' }}
            treeData={deptList}
          />
        </Form.Item>
        <Form.Item label='岗位' name='job'>
          <Input placeholder='请输入岗位'></Input>
        </Form.Item>
        <Form.Item label='状态' name='state'>
          <Select>
            <Select.Option value={1}>在职</Select.Option>
            <Select.Option value={2}>离职</Select.Option>
            <Select.Option value={3}>试用期</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label='系统角色' name='roleList'>
          <Select placeholder='请选择角色'>
            {roleList.map(item => {
              return (
                <Select.Option value={item._id} key={item._id}>
                  {item.roleName}
                </Select.Option>
              )
            })}
          </Select>
        </Form.Item>
        <Form.Item label='用户头像'>
          <Upload
            listType='picture-circle'
            showUploadList={false}
            headers={{
              Authorization: 'Bearer ' + storage.get('token'),
              icode: 'B815F86524423DB0'
            }}
            action='/api/users/upload'
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {img ? (
              <img src={img} style={{ width: '100%', borderRadius: '100%' }} />
            ) : (
              <div>
                {loading ? <LoadingOutlined rev={undefined} /> : <PlusOutlined rev={undefined} />}
                <div style={{ marginTop: 5 }}>上传头像</div>
              </div>
            )}
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default CreateUser
