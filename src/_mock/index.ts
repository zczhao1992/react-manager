import Mock from 'mockjs'

Mock.mock('/api/test', 'get', () => {
  return {
    code: 0,
    data: {
      name: `dd老师 ${Date.now()}`
    },
    msg: 'success'
  }
})
// 登录
Mock.mock('/users/login', 'post', () => {
  return {
    code: 0,
    data: Mock.Random.word(20),
    msg: 'success'
  }
})
// 获取用户信息
Mock.mock('/users/getUserInfo', 'get', () => {
  return {
    code: 0,
    data: {
      _id: '63bc321300732c27697f203',
      userId: 1000017,
      userName: Mock.Random.cname(),
      userEmail: Mock.Random.email('alibaba.com'),
      deptId: '63bc321300732c27697f203',
      state: 1,
      mobile: '21321312323',
      job: '前端工程师',
      role: 1,
      roleList: '63bc321300732c27697f203',
      createId: 0,
      deptName: '大前端',
      userImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVsiZfWPnJuuZ.png'
    },
    msg: 'success'
  }
})

// 获取权限列表
Mock.mock('/users/getPermissionList', 'get', () => {
  return {
    code: 0,
    data: {
      buttonList: [
        'query',
        'ordercluster@query',
        'order@query',
        'order@create',
        'order@export',
        'order@detail',
        'order@point',
        'order@route',
        'order@delete',
        'dept@query',
        'dept@create',
        'dept@edit',
        'dept@delete',
        'role@query',
        'role@create',
        'role@edit',
        'role@setting',
        'role@delete',
        'menu@query',
        'menu@create',
        'menu@edit',
        'menu@delete',
        'user@query',
        'user@create',
        'user@edit',
        'user@delete',
        'user@patchDelete',
        'dashboard@query'
      ],
      menuList: [
        {
          _id: '63f07a438c74bdc1580c2850',
          menuType: 1,
          menuName: '工作台',
          path: '/dashboard',
          menuState: 1,
          parentId: '',
          createTime: '2023-02-16T05:59:25.800Z',
          updateTime: '2023-05-27T06:24:19.811Z',
          __v: 0,
          orderBy: 1,
          icon: 'DesktopOutlined',
          createId: 1000002,
          children: [
            {
              _id: '63f0888054db6c7dc7fd17e6',
              menuType: 2,
              menuName: '查看',
              menuCode: 'dashboard@query',
              orderBy: 0,
              menuState: 1,
              parentId: '63f07a438c74bdc1580c2850',
              createTime: '2023-02-18T08:12:46.705Z',
              updateTime: '2023-02-28T14:32:56.421Z',
              __v: 0,
              createId: 1000002
            }
          ],
          buttons: [
            {
              _id: '63f0888054db6c7dc7fd17e6',
              menuType: 2,
              menuName: '查看',
              menuCode: 'dashboard@query',
              orderBy: 0,
              menuState: 1,
              parentId: '63f07a438c74bdc1580c2850',
              createTime: '2023-02-18T08:12:46.705Z',
              updateTime: '2023-02-28T14:32:56.421Z',
              __v: 0,
              createId: 1000002
            }
          ]
        },
        {
          _id: '6069beb8b306e7f18dd72efc',
          parentId: '',
          createTime: '2021-04-04T13:23:49.765Z',
          updateTime: '2023-02-19T15:10:38.922Z',
          menuType: 1,
          menuState: 1,
          menuName: '系统管理',
          icon: 'SettingOutlined',
          path: 'system',
          orderBy: 2,
          createId: 1000002,
          children: [
            {
              _id: '6069bec6b306e7f18dd72efd',
              parentId: '6069beb8b306e7f18dd72efc',
              createTime: '2021-04-04T13:23:49.765Z',
              updateTime: '2023-02-19T15:11:05.982Z',
              menuType: 1,
              menuState: 1,
              menuName: '用户管理',
              path: '/userList',
              __v: 0,
              component: 'User',
              icon: 'TeamOutlined',
              orderBy: 1,
              createId: 1000002,
              children: [
                {
                  _id: '6069c3f7341306f73b75fbfe',
                  parentId: '6069bec6b306e7f18dd72efd',
                  createTime: '2021-04-04T13:49:21.159Z',
                  updateTime: '2023-02-28T14:42:41.896Z',
                  menuType: 2,
                  menuState: 1,
                  menuName: '查看',
                  menuCode: 'user@query',
                  __v: 0,
                  orderBy: 0,
                  createId: 1000002
                },
                {
                  _id: '60a0e80d92ea01921486ecac',
                  parentId: '6069bec6b306e7f18dd72efd',
                  createTime: '2021-05-16T09:34:46.325Z',
                  updateTime: '2023-02-28T14:42:47.075Z',
                  menuType: 2,
                  menuState: 1,
                  menuName: '新增',
                  menuCode: 'user@create',
                  __v: 0,
                  orderBy: 0,
                  createId: 1000002
                },
                {
                  _id: '60a0e81c92ea01921486ecad',
                  parentId: '6069bec6b306e7f18dd72efd',
                  createTime: '2021-05-16T09:34:46.325Z',
                  updateTime: '2023-02-28T14:42:53.888Z',
                  menuType: 2,
                  menuState: 1,
                  menuName: '编辑',
                  menuCode: 'user@edit',
                  __v: 0,
                  orderBy: 0,
                  createId: 1000002
                },
                {
                  _id: '60a0e82592ea01921486ecae',
                  parentId: '6069bec6b306e7f18dd72efd',
                  createTime: '2021-05-16T09:34:46.325Z',
                  updateTime: '2023-02-28T14:42:58.970Z',
                  menuType: 2,
                  menuState: 1,
                  menuName: '删除',
                  menuCode: 'user@delete',
                  __v: 0,
                  orderBy: 0,
                  createId: 1000002
                },
                {
                  _id: '60a0e83392ea01921486ecaf',
                  parentId: '6069bec6b306e7f18dd72efd',
                  createTime: '2021-05-16T09:34:46.325Z',
                  updateTime: '2023-02-28T14:43:10.672Z',
                  menuType: 2,
                  menuState: 1,
                  menuName: '批量删除',
                  menuCode: 'user@patchDelete',
                  __v: 0,
                  orderBy: 0,
                  createId: 1000002
                }
              ],
              buttons: [
                {
                  _id: '6069c3f7341306f73b75fbfe',
                  parentId: '6069bec6b306e7f18dd72efd',
                  createTime: '2021-04-04T13:49:21.159Z',
                  updateTime: '2023-02-28T14:42:41.896Z',
                  menuType: 2,
                  menuState: 1,
                  menuName: '查看',
                  menuCode: 'user@query',
                  __v: 0,
                  orderBy: 0,
                  createId: 1000002
                },
                {
                  _id: '60a0e80d92ea01921486ecac',
                  parentId: '6069bec6b306e7f18dd72efd',
                  createTime: '2021-05-16T09:34:46.325Z',
                  updateTime: '2023-02-28T14:42:47.075Z',
                  menuType: 2,
                  menuState: 1,
                  menuName: '新增',
                  menuCode: 'user@create',
                  __v: 0,
                  orderBy: 0,
                  createId: 1000002
                },
                {
                  _id: '60a0e81c92ea01921486ecad',
                  parentId: '6069bec6b306e7f18dd72efd',
                  createTime: '2021-05-16T09:34:46.325Z',
                  updateTime: '2023-02-28T14:42:53.888Z',
                  menuType: 2,
                  menuState: 1,
                  menuName: '编辑',
                  menuCode: 'user@edit',
                  __v: 0,
                  orderBy: 0,
                  createId: 1000002
                },
                {
                  _id: '60a0e82592ea01921486ecae',
                  parentId: '6069bec6b306e7f18dd72efd',
                  createTime: '2021-05-16T09:34:46.325Z',
                  updateTime: '2023-02-28T14:42:58.970Z',
                  menuType: 2,
                  menuState: 1,
                  menuName: '删除',
                  menuCode: 'user@delete',
                  __v: 0,
                  orderBy: 0,
                  createId: 1000002
                },
                {
                  _id: '60a0e83392ea01921486ecaf',
                  parentId: '6069bec6b306e7f18dd72efd',
                  createTime: '2021-05-16T09:34:46.325Z',
                  updateTime: '2023-02-28T14:43:10.672Z',
                  menuType: 2,
                  menuState: 1,
                  menuName: '批量删除',
                  menuCode: 'user@patchDelete',
                  __v: 0,
                  orderBy: 0,
                  createId: 1000002
                }
              ]
            },
            {
              _id: '6083d756c30e1188761493f2',
              parentId: '6069beb8b306e7f18dd72efc',
              createTime: '2021-04-04T13:23:49.765Z',
              updateTime: '2023-02-19T15:11:37.801Z',
              menuType: 1,
              menuState: 1,
              menuName: '菜单管理',
              path: '/menuList',
              __v: 0,
              component: 'Menu',
              icon: 'MenuOutlined',
              orderBy: 1,
              createId: 1000002,
              children: [
                {
                  _id: '6083f63bc30e1188761493f4',
                  parentId: '6083d756c30e1188761493f2',
                  createTime: '2021-04-24T05:00:05.659Z',
                  updateTime: '2023-02-28T14:43:30.642Z',
                  menuType: 2,
                  menuState: 1,
                  menuName: '查看',
                  menuCode: 'menu@query',
                  __v: 0,
                  orderBy: 0,
                  createId: 1000002
                },
                {
                  _id: '60a0e84c92ea01921486ecb0',
                  parentId: '6083d756c30e1188761493f2',
                  createTime: '2021-05-16T09:34:46.325Z',
                  updateTime: '2023-02-28T14:45:07.290Z',
                  menuType: 2,
                  menuState: 1,
                  menuName: '新增',
                  menuCode: 'menu@create',
                  __v: 0,
                  orderBy: 0,
                  createId: 1000002
                },
                {
                  _id: '60a0e85392ea01921486ecb1',
                  parentId: '6083d756c30e1188761493f2',
                  createTime: '2021-05-16T09:34:46.325Z',
                  updateTime: '2023-02-28T14:45:11.728Z',
                  menuType: 2,
                  menuState: 1,
                  menuName: '编辑',
                  menuCode: 'menu@edit',
                  __v: 0,
                  orderBy: 0,
                  createId: 1000002
                },
                {
                  _id: '60a0e85c92ea01921486ecb2',
                  parentId: '6083d756c30e1188761493f2',
                  createTime: '2021-05-16T09:34:46.325Z',
                  updateTime: '2023-02-28T14:45:16.120Z',
                  menuType: 2,
                  menuState: 1,
                  menuName: '删除',
                  menuCode: 'menu@delete',
                  __v: 0,
                  orderBy: 0,
                  createId: 1000002
                }
              ],
              buttons: [
                {
                  _id: '6083f63bc30e1188761493f4',
                  parentId: '6083d756c30e1188761493f2',
                  createTime: '2021-04-24T05:00:05.659Z',
                  updateTime: '2023-02-28T14:43:30.642Z',
                  menuType: 2,
                  menuState: 1,
                  menuName: '查看',
                  menuCode: 'menu@query',
                  __v: 0,
                  orderBy: 0,
                  createId: 1000002
                },
                {
                  _id: '60a0e84c92ea01921486ecb0',
                  parentId: '6083d756c30e1188761493f2',
                  createTime: '2021-05-16T09:34:46.325Z',
                  updateTime: '2023-02-28T14:45:07.290Z',
                  menuType: 2,
                  menuState: 1,
                  menuName: '新增',
                  menuCode: 'menu@create',
                  __v: 0,
                  orderBy: 0,
                  createId: 1000002
                },
                {
                  _id: '60a0e85392ea01921486ecb1',
                  parentId: '6083d756c30e1188761493f2',
                  createTime: '2021-05-16T09:34:46.325Z',
                  updateTime: '2023-02-28T14:45:11.728Z',
                  menuType: 2,
                  menuState: 1,
                  menuName: '编辑',
                  menuCode: 'menu@edit',
                  __v: 0,
                  orderBy: 0,
                  createId: 1000002
                },
                {
                  _id: '60a0e85c92ea01921486ecb2',
                  parentId: '6083d756c30e1188761493f2',
                  createTime: '2021-05-16T09:34:46.325Z',
                  updateTime: '2023-02-28T14:45:16.120Z',
                  menuType: 2,
                  menuState: 1,
                  menuName: '删除',
                  menuCode: 'menu@delete',
                  __v: 0,
                  orderBy: 0,
                  createId: 1000002
                }
              ]
            },
            {
              _id: '6083d76bc30e1188761493f3',
              parentId: '6069beb8b306e7f18dd72efc',
              createTime: '2021-04-24T05:00:05.659Z',
              updateTime: '2023-02-19T15:12:25.196Z',
              menuType: 1,
              menuState: 1,
              menuName: '角色管理',
              path: '/roleList',
              __v: 0,
              component: 'Role',
              icon: 'TrademarkCircleOutlined',
              orderBy: 3,
              createId: 1000002,
              children: [
                {
                  _id: '60978d6a3c0c8738d016ca5f',
                  parentId: '6083d76bc30e1188761493f3',
                  createTime: '2021-05-09T07:17:23.890Z',
                  updateTime: '2023-02-28T14:46:53.293Z',
                  menuType: 2,
                  menuState: 1,
                  menuName: '查看',
                  menuCode: 'role@query',
                  __v: 0,
                  orderBy: 0,
                  createId: 1000002
                },
                {
                  _id: '60a0e87392ea01921486ecb3',
                  parentId: '6083d76bc30e1188761493f3',
                  createTime: '2021-05-16T09:34:46.325Z',
                  updateTime: '2023-02-28T14:46:57.730Z',
                  menuType: 2,
                  menuState: 1,
                  menuName: '创建',
                  menuCode: 'role@create',
                  __v: 0,
                  orderBy: 0,
                  createId: 1000002
                },
                {
                  _id: '60a0e87b92ea01921486ecb4',
                  parentId: '6083d76bc30e1188761493f3',
                  createTime: '2021-05-16T09:34:46.325Z',
                  updateTime: '2023-02-28T14:47:02.268Z',
                  menuType: 2,
                  menuState: 1,
                  menuName: '编辑',
                  menuCode: 'role@edit',
                  __v: 0,
                  orderBy: 0,
                  createId: 1000002
                },
                {
                  _id: '60a0e88792ea01921486ecb5',
                  parentId: '6083d76bc30e1188761493f3',
                  createTime: '2021-05-16T09:34:46.325Z',
                  updateTime: '2023-02-28T14:47:06.753Z',
                  menuType: 2,
                  menuState: 1,
                  menuName: '设置权限',
                  menuCode: 'role@setting',
                  __v: 0,
                  orderBy: 0,
                  createId: 1000002
                },
                {
                  _id: '60a0e89192ea01921486ecb6',
                  parentId: '6083d76bc30e1188761493f3',
                  createTime: '2021-05-16T09:34:46.325Z',
                  updateTime: '2023-02-28T14:47:11.233Z',
                  menuType: 2,
                  menuState: 1,
                  menuName: '删除',
                  menuCode: 'role@delete',
                  __v: 0,
                  orderBy: 0,
                  createId: 1000002
                }
              ],
              buttons: [
                {
                  _id: '60978d6a3c0c8738d016ca5f',
                  parentId: '6083d76bc30e1188761493f3',
                  createTime: '2021-05-09T07:17:23.890Z',
                  updateTime: '2023-02-28T14:46:53.293Z',
                  menuType: 2,
                  menuState: 1,
                  menuName: '查看',
                  menuCode: 'role@query',
                  __v: 0,
                  orderBy: 0,
                  createId: 1000002
                },
                {
                  _id: '60a0e87392ea01921486ecb3',
                  parentId: '6083d76bc30e1188761493f3',
                  createTime: '2021-05-16T09:34:46.325Z',
                  updateTime: '2023-02-28T14:46:57.730Z',
                  menuType: 2,
                  menuState: 1,
                  menuName: '创建',
                  menuCode: 'role@create',
                  __v: 0,
                  orderBy: 0,
                  createId: 1000002
                },
                {
                  _id: '60a0e87b92ea01921486ecb4',
                  parentId: '6083d76bc30e1188761493f3',
                  createTime: '2021-05-16T09:34:46.325Z',
                  updateTime: '2023-02-28T14:47:02.268Z',
                  menuType: 2,
                  menuState: 1,
                  menuName: '编辑',
                  menuCode: 'role@edit',
                  __v: 0,
                  orderBy: 0,
                  createId: 1000002
                },
                {
                  _id: '60a0e88792ea01921486ecb5',
                  parentId: '6083d76bc30e1188761493f3',
                  createTime: '2021-05-16T09:34:46.325Z',
                  updateTime: '2023-02-28T14:47:06.753Z',
                  menuType: 2,
                  menuState: 1,
                  menuName: '设置权限',
                  menuCode: 'role@setting',
                  __v: 0,
                  orderBy: 0,
                  createId: 1000002
                },
                {
                  _id: '60a0e89192ea01921486ecb6',
                  parentId: '6083d76bc30e1188761493f3',
                  createTime: '2021-05-16T09:34:46.325Z',
                  updateTime: '2023-02-28T14:47:11.233Z',
                  menuType: 2,
                  menuState: 1,
                  menuName: '删除',
                  menuCode: 'role@delete',
                  __v: 0,
                  orderBy: 0,
                  createId: 1000002
                }
              ]
            },
            {
              _id: '60979e4d3c0c8738d016ca60',
              parentId: '6069beb8b306e7f18dd72efc',
              createTime: '2021-05-09T07:17:23.890Z',
              updateTime: '2023-02-19T15:12:56.841Z',
              menuType: 1,
              menuState: 1,
              menuName: '部门管理',
              path: '/deptList',
              __v: 0,
              component: 'Dept',
              icon: 'ProfileOutlined',
              orderBy: 4,
              createId: 1000002,
              children: [
                {
                  _id: '60979e5a3c0c8738d016ca61',
                  parentId: '60979e4d3c0c8738d016ca60',
                  createTime: '2021-05-09T07:17:23.890Z',
                  updateTime: '2023-02-28T14:55:06.738Z',
                  menuType: 2,
                  menuState: 1,
                  menuName: '查看',
                  menuCode: 'dept@query',
                  __v: 0,
                  orderBy: 0,
                  createId: 1000002
                },
                {
                  _id: '60a0e8b092ea01921486ecb7',
                  parentId: '60979e4d3c0c8738d016ca60',
                  createTime: '2021-05-09T07:17:23.890Z',
                  updateTime: '2023-02-28T14:55:11.568Z',
                  menuType: 2,
                  menuState: 1,
                  menuName: '创建',
                  menuCode: 'dept@create',
                  __v: 0,
                  orderBy: 0,
                  createId: 1000002
                },
                {
                  _id: '60a0e8b892ea01921486ecb8',
                  parentId: '60979e4d3c0c8738d016ca60',
                  createTime: '2021-05-09T07:17:23.890Z',
                  updateTime: '2023-02-28T14:55:16.945Z',
                  menuType: 2,
                  menuState: 1,
                  menuName: '编辑',
                  menuCode: 'dept@edit',
                  __v: 0,
                  orderBy: 0,
                  createId: 1000002
                },
                {
                  _id: '60a0e8c392ea01921486ecb9',
                  parentId: '60979e4d3c0c8738d016ca60',
                  createTime: '2021-05-09T07:17:23.890Z',
                  updateTime: '2023-02-28T14:55:22.497Z',
                  menuType: 2,
                  menuState: 1,
                  menuName: '删除',
                  menuCode: 'dept@delete',
                  __v: 0,
                  orderBy: 0,
                  createId: 1000002
                }
              ],
              buttons: [
                {
                  _id: '60979e5a3c0c8738d016ca61',
                  parentId: '60979e4d3c0c8738d016ca60',
                  createTime: '2021-05-09T07:17:23.890Z',
                  updateTime: '2023-02-28T14:55:06.738Z',
                  menuType: 2,
                  menuState: 1,
                  menuName: '查看',
                  menuCode: 'dept@query',
                  __v: 0,
                  orderBy: 0,
                  createId: 1000002
                },
                {
                  _id: '60a0e8b092ea01921486ecb7',
                  parentId: '60979e4d3c0c8738d016ca60',
                  createTime: '2021-05-09T07:17:23.890Z',
                  updateTime: '2023-02-28T14:55:11.568Z',
                  menuType: 2,
                  menuState: 1,
                  menuName: '创建',
                  menuCode: 'dept@create',
                  __v: 0,
                  orderBy: 0,
                  createId: 1000002
                },
                {
                  _id: '60a0e8b892ea01921486ecb8',
                  parentId: '60979e4d3c0c8738d016ca60',
                  createTime: '2021-05-09T07:17:23.890Z',
                  updateTime: '2023-02-28T14:55:16.945Z',
                  menuType: 2,
                  menuState: 1,
                  menuName: '编辑',
                  menuCode: 'dept@edit',
                  __v: 0,
                  orderBy: 0,
                  createId: 1000002
                },
                {
                  _id: '60a0e8c392ea01921486ecb9',
                  parentId: '60979e4d3c0c8738d016ca60',
                  createTime: '2021-05-09T07:17:23.890Z',
                  updateTime: '2023-02-28T14:55:22.497Z',
                  menuType: 2,
                  menuState: 1,
                  menuName: '删除',
                  menuCode: 'dept@delete',
                  __v: 0,
                  orderBy: 0,
                  createId: 1000002
                }
              ]
            }
          ]
        },
        {
          _id: '6272005812eb226fad2f8e92',
          parentId: '',
          createTime: '2022-05-04T04:25:00.227Z',
          updateTime: '2023-02-19T15:15:19.145Z',
          menuType: 1,
          menuState: 1,
          menuName: '订单管理',
          icon: 'DatabaseOutlined',
          path: 'order',
          __v: 0,
          orderBy: 3,
          createId: 1000002,
          children: [
            {
              _id: '6272009712eb226fad2f8e93',
              parentId: '6272005812eb226fad2f8e92',
              createTime: '2022-05-04T04:25:00.227Z',
              updateTime: '2023-05-13T07:50:50.194Z',
              menuType: 1,
              menuState: 1,
              menuName: '订单列表',
              icon: 'UnorderedListOutlined',
              path: '/orderList',
              component: '',
              __v: 0,
              orderBy: 1,
              createId: 1000002,
              children: [
                {
                  _id: '63ecfa68b58729211daea646',
                  menuType: 2,
                  menuName: '查看',
                  menuCode: 'order@query',
                  menuState: 1,
                  parentId: '6272009712eb226fad2f8e93',
                  createTime: '2023-02-15T14:32:25.873Z',
                  updateTime: '2023-02-28T14:57:42.599Z',
                  __v: 0,
                  orderBy: 0,
                  createId: 1000002
                },
                {
                  _id: '63fe1674db0ea5e72286c4cf',
                  menuType: 2,
                  menuName: '新增',
                  menuCode: 'order@create',
                  orderBy: 1,
                  menuState: 1,
                  parentId: '6272009712eb226fad2f8e93',
                  createTime: '2023-02-28T14:52:00.185Z',
                  updateTime: '2023-02-28T14:52:00.185Z',
                  __v: 0,
                  createId: 1000002
                },
                {
                  _id: '63fe1683db0ea5e72286c4d2',
                  menuType: 2,
                  menuName: '导出',
                  menuCode: 'order@export',
                  orderBy: 2,
                  menuState: 1,
                  parentId: '6272009712eb226fad2f8e93',
                  createTime: '2023-02-28T14:52:00.185Z',
                  updateTime: '2023-02-28T14:52:00.185Z',
                  __v: 0,
                  createId: 1000002
                },
                {
                  _id: '63fe169adb0ea5e72286c4d5',
                  menuType: 2,
                  menuName: '详情',
                  menuCode: 'order@detail',
                  orderBy: 3,
                  menuState: 1,
                  parentId: '6272009712eb226fad2f8e93',
                  createTime: '2023-02-28T14:52:00.185Z',
                  updateTime: '2023-02-28T14:52:00.185Z',
                  __v: 0,
                  createId: 1000002
                },
                {
                  _id: '63fe16b8db0ea5e72286c4d8',
                  menuType: 2,
                  menuName: '打点',
                  menuCode: 'order@point',
                  orderBy: 4,
                  menuState: 1,
                  parentId: '6272009712eb226fad2f8e93',
                  createTime: '2023-02-28T14:52:00.185Z',
                  updateTime: '2023-02-28T14:52:00.185Z',
                  __v: 0,
                  createId: 1000002
                },
                {
                  _id: '63fe16c2db0ea5e72286c4db',
                  menuType: 2,
                  menuName: '轨迹',
                  menuCode: 'order@route',
                  orderBy: 5,
                  menuState: 1,
                  parentId: '6272009712eb226fad2f8e93',
                  createTime: '2023-02-28T14:52:00.185Z',
                  updateTime: '2023-02-28T14:52:00.185Z',
                  __v: 0,
                  createId: 1000002
                },
                {
                  _id: '63fe16ccdb0ea5e72286c4de',
                  menuType: 2,
                  menuName: '删除',
                  menuCode: 'order@delete',
                  orderBy: 6,
                  menuState: 1,
                  parentId: '6272009712eb226fad2f8e93',
                  createTime: '2023-02-28T14:52:00.185Z',
                  updateTime: '2023-02-28T14:52:00.185Z',
                  __v: 0,
                  createId: 1000002
                }
              ],
              buttons: [
                {
                  _id: '63ecfa68b58729211daea646',
                  menuType: 2,
                  menuName: '查看',
                  menuCode: 'order@query',
                  menuState: 1,
                  parentId: '6272009712eb226fad2f8e93',
                  createTime: '2023-02-15T14:32:25.873Z',
                  updateTime: '2023-02-28T14:57:42.599Z',
                  __v: 0,
                  orderBy: 0,
                  createId: 1000002
                },
                {
                  _id: '63fe1674db0ea5e72286c4cf',
                  menuType: 2,
                  menuName: '新增',
                  menuCode: 'order@create',
                  orderBy: 1,
                  menuState: 1,
                  parentId: '6272009712eb226fad2f8e93',
                  createTime: '2023-02-28T14:52:00.185Z',
                  updateTime: '2023-02-28T14:52:00.185Z',
                  __v: 0,
                  createId: 1000002
                },
                {
                  _id: '63fe1683db0ea5e72286c4d2',
                  menuType: 2,
                  menuName: '导出',
                  menuCode: 'order@export',
                  orderBy: 2,
                  menuState: 1,
                  parentId: '6272009712eb226fad2f8e93',
                  createTime: '2023-02-28T14:52:00.185Z',
                  updateTime: '2023-02-28T14:52:00.185Z',
                  __v: 0,
                  createId: 1000002
                },
                {
                  _id: '63fe169adb0ea5e72286c4d5',
                  menuType: 2,
                  menuName: '详情',
                  menuCode: 'order@detail',
                  orderBy: 3,
                  menuState: 1,
                  parentId: '6272009712eb226fad2f8e93',
                  createTime: '2023-02-28T14:52:00.185Z',
                  updateTime: '2023-02-28T14:52:00.185Z',
                  __v: 0,
                  createId: 1000002
                },
                {
                  _id: '63fe16b8db0ea5e72286c4d8',
                  menuType: 2,
                  menuName: '打点',
                  menuCode: 'order@point',
                  orderBy: 4,
                  menuState: 1,
                  parentId: '6272009712eb226fad2f8e93',
                  createTime: '2023-02-28T14:52:00.185Z',
                  updateTime: '2023-02-28T14:52:00.185Z',
                  __v: 0,
                  createId: 1000002
                },
                {
                  _id: '63fe16c2db0ea5e72286c4db',
                  menuType: 2,
                  menuName: '轨迹',
                  menuCode: 'order@route',
                  orderBy: 5,
                  menuState: 1,
                  parentId: '6272009712eb226fad2f8e93',
                  createTime: '2023-02-28T14:52:00.185Z',
                  updateTime: '2023-02-28T14:52:00.185Z',
                  __v: 0,
                  createId: 1000002
                },
                {
                  _id: '63fe16ccdb0ea5e72286c4de',
                  menuType: 2,
                  menuName: '删除',
                  menuCode: 'order@delete',
                  orderBy: 6,
                  menuState: 1,
                  parentId: '6272009712eb226fad2f8e93',
                  createTime: '2023-02-28T14:52:00.185Z',
                  updateTime: '2023-02-28T14:52:00.185Z',
                  __v: 0,
                  createId: 1000002
                }
              ]
            },
            {
              _id: '63da0226a96e86702e4f2ca7',
              menuType: 1,
              menuName: '订单聚合',
              path: '/cluster',
              menuState: 1,
              parentId: '6272005812eb226fad2f8e92',
              createTime: '2023-02-01T06:09:00.465Z',
              updateTime: '2023-02-19T15:16:13.022Z',
              __v: 0,
              orderBy: 2,
              icon: 'AimOutlined',
              createId: 1000002,
              children: [
                {
                  _id: '63ecfa74b58729211daea649',
                  menuType: 2,
                  menuName: '查看',
                  menuCode: 'ordercluster@query',
                  menuState: 1,
                  parentId: '63da0226a96e86702e4f2ca7',
                  createTime: '2023-02-15T14:32:25.873Z',
                  updateTime: '2023-02-28T14:56:50.763Z',
                  __v: 0,
                  orderBy: 0,
                  createId: 1000002
                }
              ],
              buttons: [
                {
                  _id: '63ecfa74b58729211daea649',
                  menuType: 2,
                  menuName: '查看',
                  menuCode: 'ordercluster@query',
                  menuState: 1,
                  parentId: '63da0226a96e86702e4f2ca7',
                  createTime: '2023-02-15T14:32:25.873Z',
                  updateTime: '2023-02-28T14:56:50.763Z',
                  __v: 0,
                  orderBy: 0,
                  createId: 1000002
                }
              ]
            },
            {
              _id: '63e1ff8e65ac04da60e7a61c',
              menuType: 1,
              menuName: '司机列表',
              path: '/driverList',
              menuState: 1,
              parentId: '6272005812eb226fad2f8e92',
              createTime: '2023-02-01T08:19:04.121Z',
              updateTime: '2023-02-19T15:17:21.794Z',
              __v: 0,
              orderBy: 3,
              icon: 'MehOutlined',
              createId: 1000002,
              children: [
                {
                  orderBy: 0,
                  _id: '63ecfa7db58729211daea64c',
                  menuType: 2,
                  menuName: '查看',
                  menuCode: 'query',
                  menuState: 1,
                  parentId: '63e1ff8e65ac04da60e7a61c',
                  createTime: '2023-02-15T14:32:25.873Z',
                  updateTime: '2023-02-15T14:32:25.873Z',
                  __v: 0,
                  createId: 1000002
                }
              ],
              buttons: [
                {
                  orderBy: 0,
                  _id: '63ecfa7db58729211daea64c',
                  menuType: 2,
                  menuName: '查看',
                  menuCode: 'query',
                  menuState: 1,
                  parentId: '63e1ff8e65ac04da60e7a61c',
                  createTime: '2023-02-15T14:32:25.873Z',
                  updateTime: '2023-02-15T14:32:25.873Z',
                  __v: 0,
                  createId: 1000002
                }
              ]
            }
          ]
        },
        {
          _id: '63f07a438c74bdc1340c2851',
          menuType: 1,
          menuName: '表单编辑器',
          path: '/lowcode',
          menuState: 1,
          parentId: '',
          createTime: '2023-02-16T05:59:25.800Z',
          updateTime: '2023-05-27T06:24:19.811Z',
          __v: 0,
          orderBy: 4,
          icon: 'CodeOutlined',
          createId: 1000002,
          children: [
            {
              _id: '63f0888054db6c7dc7fd17e6',
              menuType: 2,
              menuName: '查看',
              menuCode: 'lowcode@query',
              orderBy: 0,
              menuState: 1,
              parentId: '63f07a438c74bdc1580c2850',
              createTime: '2023-02-18T08:12:46.705Z',
              updateTime: '2023-02-28T14:32:56.421Z',
              __v: 0,
              createId: 1000002
            }
          ],
          buttons: [
            {
              _id: '63f0888054db6c7dc7fd17e6',
              menuType: 2,
              menuName: '查看',
              menuCode: 'lowcode@query',
              orderBy: 0,
              menuState: 1,
              parentId: '63f07a438c74bdc1580c2850',
              createTime: '2023-02-18T08:12:46.705Z',
              updateTime: '2023-02-28T14:32:56.421Z',
              __v: 0,
              createId: 1000002
            }
          ]
        },
        {
          _id: '63f07a438c74bdc1340c2851',
          menuType: 1,
          menuName: '业务组件',
          path: '/proComponents',
          menuState: 1,
          parentId: '',
          createTime: '2023-02-16T05:59:25.800Z',
          updateTime: '2023-05-27T06:24:19.811Z',
          __v: 0,
          orderBy: 4,
          icon: 'ThunderboltOutlined',
          createId: 1000002,
          children: [
            {
              _id: '63f0888054db6c7dc7fd17e6',
              menuType: 2,
              menuName: '查看',
              menuCode: 'dashboard@query',
              orderBy: 0,
              menuState: 1,
              parentId: '63f07a438c74bdc1580c2850',
              createTime: '2023-02-18T08:12:46.705Z',
              updateTime: '2023-02-28T14:32:56.421Z',
              __v: 0,
              createId: 1000002
            }
          ],
          buttons: [
            {
              _id: '63f0888054db6c7dc7fd17e6',
              menuType: 2,
              menuName: '查看',
              menuCode: 'dashboard@query',
              orderBy: 0,
              menuState: 1,
              parentId: '63f07a438c74bdc1580c2850',
              createTime: '2023-02-18T08:12:46.705Z',
              updateTime: '2023-02-28T14:32:56.421Z',
              __v: 0,
              createId: 1000002
            }
          ]
        }
        // {
        //   _id: '63f07a438c74bdc1340c2851',
        //   menuType: 1,
        //   menuName: 'ChatGPT',
        //   path: '/chatGPT',
        //   menuState: 1,
        //   parentId: '',
        //   createTime: '2023-02-16T05:59:25.800Z',
        //   updateTime: '2023-05-27T06:24:19.811Z',
        //   __v: 0,
        //   orderBy: 4,
        //   icon: 'RocketOutlined',
        //   createId: 1000002,
        //   children: [
        //     {
        //       _id: '63f0888054db6c7dc7fd17e6',
        //       menuType: 2,
        //       menuName: '查看',
        //       menuCode: 'dashboard@query',
        //       orderBy: 0,
        //       menuState: 1,
        //       parentId: '63f07a438c74bdc1580c2850',
        //       createTime: '2023-02-18T08:12:46.705Z',
        //       updateTime: '2023-02-28T14:32:56.421Z',
        //       __v: 0,
        //       createId: 1000002
        //     }
        //   ],
        //   buttons: [
        //     {
        //       _id: '63f0888054db6c7dc7fd17e6',
        //       menuType: 2,
        //       menuName: '查看',
        //       menuCode: 'dashboard@query',
        //       orderBy: 0,
        //       menuState: 1,
        //       parentId: '63f07a438c74bdc1580c2850',
        //       createTime: '2023-02-18T08:12:46.705Z',
        //       updateTime: '2023-02-28T14:32:56.421Z',
        //       __v: 0,
        //       createId: 1000002
        //     }
        //   ]
        // }
      ]
    },
    msg: 'success'
  }
})
