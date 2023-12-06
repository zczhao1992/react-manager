import Mock from 'mockjs'

// 用户列表
Mock.mock('/users/list', 'get', () => {
  return {
    code: 0,
    data: {
      page: {
        pageNum: 1,
        pageSize: 10,
        total: 10
      },
      list: [
        {
          userImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          createTime: '2023-11-22T10:44:25.532Z',
          userId: 1000016,
          userName: 'JackMa',
          userEmail: 'jackma@mars.com',
          mobile: '17011221122',
          sex: 0,
          deptId: '',
          deptName: '',
          job: '前端工程师',
          state: 1,
          role: 2,
          createId: 1000002,
          lastLoginTime: '2023-12-06T13:14:33.658Z',
          roleList: '655dbedb11c02c8597dce76f'
        },
        {
          userId: 100017,
          userName: 'JackBean',
          userEmail: 'jackbean@mars.com',
          deptId: '655dbef811c02c8597dce77a',
          deptName: '大前端',
          state: 1,
          role: 1,
          roleList: '655dbedb11c02c8597dce76f',
          createId: 1000002,
          userImg: '',
          createTime: '2023-11-22T08:52:47.963Z',
          lastLoginTime: '2023-11-22T09:21:22.314Z',
          __v: 0
        },
        {
          userId: 100018,
          userName: '9549587',
          userEmail: '9549587@mars.com',
          deptId: '',
          deptName: '',
          state: 1,
          role: 1,
          roleList: '',
          createId: 1000002,
          userImg: 'http://api-driver.marsview.cc/3f9393c68f57ac57704652f00.png',
          createTime: '2023-11-22T08:52:47.963Z',
          lastLoginTime: '2023-11-30T00:47:22.775Z',
          __v: 0,
          job: '测试'
        },
        {
          userId: 100020,
          userName: '1366143860',
          userEmail: '1366143860@mars.com',
          deptId: '6568c7254a54800ac8d5b18e',
          deptName: '部门5',
          state: 1,
          role: 1,
          roleList: '',
          createId: 1000002,
          userImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          createTime: '2023-11-22T08:52:47.963Z',
          lastLoginTime: '2023-12-06T10:25:10.923Z',
          mobile: '13072361279',
          job: '前端1'
        },
        {
          userId: 100022,
          userName: '413401333',
          userEmail: '413401333@mars.com',
          deptId: '',
          deptName: '大前端',
          state: 1,
          role: 1,
          roleList: '',
          createId: 1000002,
          userImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          createTime: '2023-11-22T08:52:47.963Z',
          lastLoginTime: '2023-11-23T11:32:38.695Z'
        },
        {
          userId: 100023,
          userName: '1050732226',
          userEmail: '1050732226@mars.com',
          deptId: '',
          deptName: '大前端',
          state: 1,
          role: 1,
          roleList: '',
          createId: 1000002,
          userImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          createTime: '2023-11-22T08:52:47.963Z',
          lastLoginTime: '2023-11-22T09:21:22.314Z'
        },
        {
          userId: 100024,
          userName: '191337035',
          userEmail: '191337035@mars.com',
          deptId: '',
          deptName: '大前端',
          state: 1,
          role: 1,
          roleList: '',
          createId: 1000002,
          userImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          createTime: '2023-11-22T08:52:47.963Z',
          lastLoginTime: '2023-11-22T09:21:22.314Z'
        },
        {
          userId: 100025,
          userName: '717210290',
          userEmail: '717210290@mars.com',
          deptId: '',
          deptName: '大前端',
          state: 1,
          role: 1,
          roleList: '',
          createId: 1000002,
          userImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          createTime: '2023-11-22T08:52:47.963Z',
          lastLoginTime: '2023-11-22T09:21:22.314Z'
        },
        {
          userId: 100026,
          userName: '742596464',
          userEmail: '742596464@mars.com',
          deptId: '',
          deptName: '大前端',
          state: 1,
          role: 1,
          roleList: '',
          createId: 1000002,
          userImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          createTime: '2023-11-22T08:52:47.963Z',
          lastLoginTime: '2023-12-06T13:09:31.063Z'
        },
        {
          userId: 100027,
          userName: '475721797',
          userEmail: '475721797@mars.com',
          deptId: '',
          deptName: '大前端',
          state: 1,
          role: 1,
          roleList: '',
          createId: 1000002,
          userImg: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          createTime: '2023-11-22T08:52:47.963Z',
          lastLoginTime: '2023-12-02T05:12:27.702Z'
        }
      ]
    },
    msg: 'success'
  }
})

// 创建用户
Mock.mock('/users/create', 'post', () => {
  return {
    code: 0,
    data: {},
    msg: 'success'
  }
})

// 编辑用户
Mock.mock('/users/edit', 'post', () => {
  return {
    code: 0,
    data: {},
    msg: 'success'
  }
})

// 删除用户
Mock.mock('/users/delete', 'post', () => {
  return {
    code: 0,
    data: {},
    msg: 'success'
  }
})
