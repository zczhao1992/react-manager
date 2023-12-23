import Mock from 'mockjs'

Mock.mock(/\/roles\/list/, 'get', () => {
  return {
    code: 0,
    data: {
      list: [
        {
          permissionList: {
            checkedKeys: [],
            halfCheckedKeys: []
          },
          _id: '655dbed711c02c8597dce76b',
          roleName: '产品',
          createId: 1000002,
          updateTime: '2023-11-22T08:23:39.918Z',
          createTime: '2023-11-22T08:23:39.918Z',
          __v: 0
        },
        {
          permissionList: {
            checkedKeys: [
              '655db4a4f10762608048caf4',
              '655db556f10762608048cb02',
              '655dc53ed4dc6d6fda15dbad',
              '655dc67ed4dc6d6fda15dbc7',
              '655dc68ad4dc6d6fda15dbcb',
              '655db5a8f10762608048cb0a',
              '655dc69bd4dc6d6fda15dbcf',
              '655dc6a5d4dc6d6fda15dbd3',
              '655dc6afd4dc6d6fda15dbd7',
              '655dbb0011c02c8597dce710',
              '655dc6c7d4dc6d6fda15dbdb',
              '655dc6d3d4dc6d6fda15dbdf',
              '655dc6ddd4dc6d6fda15dbe3',
              '655dbbc411c02c8597dce720',
              '655dc6f4d4dc6d6fda15dbe7',
              '655dc6fdd4dc6d6fda15dbeb',
              '655dc708d4dc6d6fda15dbef',
              '655dbc4d11c02c8597dce72c',
              '655dc735d4dc6d6fda15dbf6',
              '655dc73fd4dc6d6fda15dbfa',
              '655dc74cd4dc6d6fda15dbfe',
              '655dbc7911c02c8597dce734',
              '655dbcb011c02c8597dce73c'
            ],
            halfCheckedKeys: [
              '655db45ff10762608048caec',
              '655db520f10762608048cafa',
              '655db546f10762608048cafe',
              '655db59bf10762608048cb06',
              '655db5c7f10762608048cb0e',
              '655dbbb911c02c8597dce71c',
              '655dbc1e11c02c8597dce724',
              '655dbc3811c02c8597dce728',
              '655dbc6c11c02c8597dce730',
              '655dbca311c02c8597dce738'
            ]
          },
          _id: '655dbedb11c02c8597dce76f',
          roleName: '技术',
          createId: 1000002,
          updateTime: '2023-11-22T08:23:39.918Z',
          createTime: '2023-11-22T08:23:39.918Z',
          __v: 0
        }
      ],
      page: {
        pageNum: 1,
        pageSize: 10,
        total: 2
      }
    },
    msg: 'success'
  }
})

// 角色列表
Mock.mock('/roles/allList', 'get', () => {
  return {
    code: 0,
    data: [
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
    ],
    msg: 'success'
  }
})

// 创建角色
Mock.mock('/roles/create', 'post', () => {
  return {
    code: 0,
    data: {},
    msg: 'success'
  }
})

// 编辑角色
Mock.mock('/roles/edit', 'post', () => {
  return {
    code: 0,
    data: {},
    msg: 'success'
  }
})

// 删除角色
Mock.mock('/roles/delete', 'post', () => {
  return {
    code: 0,
    data: {},
    msg: 'success'
  }
})

Mock.mock('/roles/update/permission', 'post', () => {
  return {
    code: 0,
    data: {},
    msg: 'success'
  }
})
