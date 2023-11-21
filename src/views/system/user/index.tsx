import { PageParams, User } from '@/types/api'
import { Button, Table, Form, Input, Select, Space, Modal } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { useEffect, useRef, useState } from 'react'
import api from '@/api'
import { formatDate } from '@/utils'
import CreateUser from './CreateUser'
import { IAction } from '@/types/modal'
import { message } from '@/utils/AntdGlobal'
import { useAntdTable } from 'ahooks'
import AuthButton from '@/components/AuthButton'
import SearchForm from '@/components/SearchForm'

export default function UserList() {
  const [form] = Form.useForm()
  const [userIds, setUserIds] = useState<number[]>([])
  const userRef = useRef<{
    open: (type: IAction, data?: User.UserItem) => void
  }>()

  const getTableData = ({ current, pageSize }: { current: number; pageSize: number }, formData: User.SearchParams) => {
    // return api
    //   .getUserList({
    //     ...formData,
    //     pageNum: current,
    //     pageSize: pageSize
    //   })
    //   .then(data => {
    //     return {
    //       total: data.page.total,
    //       list: data.list
    //     }
    //   })
    return Promise.resolve({
      total: 10,
      list: [
        {
          __v: 0,
          createTime: '2022-04-04T06:23:37.514Z',
          deptId: '63bc09fe1a00ce74eeb33311',
          job: '架构师',
          lastLoginTime: '2023-11-18T14:03:10.827Z',
          mobile: '17600000000',
          role: 0,
          roleList: '63bc3175300732c27697f1df',
          state: 1,
          userEmail: 'admin@imooc.com',
          userId: 1000002,
          userName: 'admin',
          deptName: '大前端',
          userImg: 'http://api-driver.marsview.cc/aa0652d013a2176bfaaaf2c00.jpeg',
          createId: 1000002
        },
        {
          userId: 1000016,
          userName: 'JackMa',
          userEmail: 'demo@mars.com',
          deptId: '63bc09fe1a00ce74eeb33311',
          state: 1,
          role: 2,
          roleList: '63bc3175300732c27697f1df',
          createTime: '2023-01-09T13:45:39.865Z',
          lastLoginTime: '2023-11-21T08:02:27.763Z',
          __v: 0,
          deptName: '大前端',
          userImg: 'http://api-driver.marsview.cc/aa0652d013a2176bfaaaf2c00.jpeg',
          job: '前端工程师',
          mobile: '1861099666',
          createId: 1000002
        },
        {
          userId: 1000018,
          userName: '老默',
          userEmail: 'laomo@mars.com',
          mobile: '18500001111',
          deptId: '63ecee84b58729211daea5bb',
          job: '资深前端',
          state: 1,
          role: 3,
          roleList: '63bc3187300732c27697f1e6',
          createTime: '2023-02-08T07:20:27.150Z',
          lastLoginTime: '2023-02-08T07:20:27.150Z',
          __v: 0,
          deptName: '运营专员',
          userImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          createId: 1000002
        },
        {
          userImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          userId: 1000019,
          userName: '疯驴子',
          userEmail: 'lvzi@mars.com',
          mobile: '18510010001',
          deptId: '63bc09fe1a00ce74eeb33311',
          job: '高级前端',
          state: 1,
          role: 3,
          roleList: '63bc3175300732c27697f1df',
          createTime: '2023-02-08T07:20:27.150Z',
          lastLoginTime: '2023-02-08T07:20:27.150Z',
          __v: 0,
          createId: 1000002
        },
        {
          userImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          userId: 1000020,
          userName: '唐小虎',
          userEmail: 'tiger@mars.com',
          mobile: '18510020001',
          deptId: '63bc09fe1a00ce74eeb33311',
          job: '高级前端',
          state: 1,
          role: 3,
          roleList: '63bc3175300732c27697f1df',
          createTime: '2023-02-08T07:20:27.150Z',
          lastLoginTime: '2023-02-08T07:20:27.150Z',
          __v: 0,
          createId: 1000002
        },
        {
          userImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          userId: 1000021,
          userName: '徐江',
          userEmail: 'xujiang@mars.com',
          mobile: '18012308888',
          deptId: '62408933dc01fb458d000efb',
          job: '专家',
          state: 1,
          role: 3,
          roleList: '609781c15ccd183084f8ea3e',
          createTime: '2023-02-08T07:20:27.150Z',
          lastLoginTime: '2023-02-08T07:20:27.150Z',
          __v: 0,
          createId: 1000002
        },
        {
          userImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          userId: 1000022,
          userName: '高启强',
          userEmail: 'qiqiang@mars.com',
          mobile: '17066668888',
          deptId: '63bc09fe1a00ce74eeb33311',
          job: '前端专家',
          state: 1,
          role: 3,
          roleList: '63bc3175300732c27697f1df',
          createTime: '2023-02-08T07:20:27.150Z',
          lastLoginTime: '2023-02-08T07:20:27.150Z',
          __v: 0,
          createId: 1000002
        },
        {
          userImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          userId: 1000023,
          userName: '高启盛',
          userEmail: 'qisheng@mars.com',
          mobile: '17622226400',
          deptId: '63bc09fe1a00ce74eeb33311',
          job: '资深前端',
          state: 1,
          role: 3,
          roleList: '63bc3175300732c27697f1df',
          createTime: '2023-02-08T07:20:27.150Z',
          lastLoginTime: '2023-02-08T07:20:27.150Z',
          __v: 0,
          createId: 1000002
        },
        {
          userImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          userId: 1000024,
          userName: '陈书婷',
          userEmail: 'shuting@mars.com',
          mobile: '18610006001',
          deptId: '63bc31ae300732c27697f1f4',
          job: '测试专家',
          state: 1,
          role: 3,
          roleList: '63bc3187300732c27697f1e6',
          createTime: '2023-02-08T07:20:27.150Z',
          lastLoginTime: '2023-02-08T07:20:27.150Z',
          __v: 0,
          createId: 1000002
        },
        {
          userImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          userId: 1000025,
          userName: '泰叔',
          userEmail: 'taishu@mars.com',
          mobile: '13010008888',
          deptId: '63bc31ae300732c27697f1f4',
          job: '测试专家',
          state: 1,
          role: 3,
          roleList: '63bc3187300732c27697f1e6',
          createTime: '2023-02-08T07:20:27.150Z',
          lastLoginTime: '2023-02-08T07:20:27.150Z',
          __v: 0,
          createId: 1000002
        }
      ]
    })
  }

  const { tableProps, search } = useAntdTable(getTableData, {
    form,
    defaultPageSize: 10
  })

  // 创建用户
  const handleCreate = () => {
    userRef.current?.open('create')
  }

  // 编辑用户
  const handleEdit = (record: User.UserItem) => {
    userRef.current?.open('edit', record)
  }

  // 删除用户
  const handleDel = (userId: number) => {
    Modal.confirm({
      title: '删除确认',
      content: <span>确认删除该用户吗？</span>,
      onOk: () => {
        handleUserDelSubmit([userId])
      }
    })
  }

  // 批量删除确认
  const handlePatchConfirm = () => {
    if (userIds.length === 0) {
      message.error('请选择要删除的用户')
      return
    }
    Modal.confirm({
      title: '删除确认',
      content: <span>确认删除该批用户吗？</span>,
      onOk: () => {
        handleUserDelSubmit(userIds)
      }
    })
  }

  // 公共删除用户接口
  const handleUserDelSubmit = async (ids: number[]) => {
    try {
      // await api.delUser({
      //   userIds: ids
      // })
      message.success('删除成功')
      setUserIds([])
      search.reset()
    } catch (error) {}
  }

  const columns: ColumnsType<User.UserItem> = [
    {
      title: '用户ID',
      dataIndex: 'userId',
      key: 'userId'
    },
    {
      title: '用户名称',
      dataIndex: 'userName',
      key: 'userName'
    },
    {
      title: '用户邮箱',
      dataIndex: 'userEmail',
      key: 'userEmail'
    },
    {
      title: '用户角色',
      dataIndex: 'role',
      key: 'role',
      render(role: number) {
        return {
          0: '超级管理员',
          1: '管理员',
          2: '体验管理员',
          3: '普通用户'
        }[role]
      }
    },
    {
      title: '用户状态',
      dataIndex: 'state',
      key: 'state',
      render(state: number) {
        return {
          1: '在职',
          2: '离职',
          3: '试用期'
        }[state]
      }
    },
    {
      title: '注册时间',
      dataIndex: 'createTime',
      key: 'createTime',
      render(createTime: string) {
        return formatDate(createTime)
      }
    },
    {
      title: '操作',
      key: 'address',
      render(record: User.UserItem) {
        return (
          <Space>
            <Button type='text' onClick={() => handleEdit(record)}>
              编辑
            </Button>
            <Button type='text' danger onClick={() => handleDel(record.userId)}>
              删除
            </Button>
          </Space>
        )
      }
    }
  ]
  return (
    <div className='user-list'>
      <SearchForm form={form} initialValues={{ state: 1 }} submit={search.submit} reset={search.reset}>
        <Form.Item name='userId' label='用户ID'>
          <Input placeholder='请输入用户ID' />
        </Form.Item>
        <Form.Item name='userName' label='用户名称'>
          <Input placeholder='请输入用户名称' />
        </Form.Item>
        <Form.Item name='state' label='状态'>
          <Select style={{ width: 120 }}>
            <Select.Option value={0}>所有</Select.Option>
            <Select.Option value={1}>在职</Select.Option>
            <Select.Option value={2}>离职</Select.Option>
            <Select.Option value={3}>试用期</Select.Option>
          </Select>
        </Form.Item>
      </SearchForm>
      <div className='base-table'>
        <div className='header-wrapper'>
          <div className='title'>用户列表</div>
          <div className='action'>
            <AuthButton auth='user@create' type='primary' onClick={handleCreate}>
              新增
            </AuthButton>
            <Button type='primary' danger onClick={handlePatchConfirm}>
              批量删除
            </Button>
          </div>
        </div>
        <Table
          bordered
          rowKey='userId'
          rowSelection={{
            type: 'checkbox',
            selectedRowKeys: userIds,
            onChange: (selectedRowKeys: React.Key[]) => {
              setUserIds(selectedRowKeys as number[])
            }
          }}
          columns={columns}
          {...tableProps}
        />
      </div>
      <CreateUser
        mRef={userRef}
        update={() => {
          search.reset()
        }}
      />
    </div>
  )
}
