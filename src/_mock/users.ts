import Mock from 'mockjs'

// 用户列表
Mock.mock(/\/users\/list/, 'get', () => {
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

// 获取部门列表
Mock.mock('/dept/list', 'get', () => {
  return {
    code: 0,
    data: [
      {
        _id: '655dbeee11c02c8597dce776',
        deptName: '技术中心',
        userName: 'admin',
        parentId: '',
        createId: 1000002,
        updateTime: '2023-11-22T08:23:39.919Z',
        createTime: '2023-11-22T08:23:39.919Z',
        __v: 0,
        children: [
          {
            _id: '655dbef811c02c8597dce77a',
            deptName: '大前端',
            userName: 'Jack',
            parentId: '655dbeee11c02c8597dce776',
            createId: 1000002,
            updateTime: '2023-11-22T08:23:39.919Z',
            createTime: '2023-11-22T08:23:39.919Z',
            __v: 0
          },
          {
            _id: '655dc06811c02c8597dce7ae',
            deptName: '测试部门',
            userName: 'Jack',
            parentId: '655dbeee11c02c8597dce776',
            createId: 1000002,
            updateTime: '2023-11-22T08:48:49.920Z',
            createTime: '2023-11-22T08:23:39.919Z',
            __v: 0
          },
          {
            _id: '655dc07e11c02c8597dce7b5',
            deptName: '产品中心',
            userName: 'Jack',
            parentId: '655dbeee11c02c8597dce776',
            createId: 1000002,
            updateTime: '2023-11-22T08:23:39.919Z',
            createTime: '2023-11-22T08:23:39.919Z',
            __v: 0
          },
          {
            _id: '655dc08911c02c8597dce7b9',
            deptName: '营销中心',
            userName: 'Jack',
            parentId: '655dbeee11c02c8597dce776',
            createId: 1000002,
            updateTime: '2023-11-22T08:23:39.919Z',
            createTime: '2023-11-22T08:23:39.919Z',
            __v: 0
          },
          {
            _id: '655dc09311c02c8597dce7bd',
            deptName: '增长中心',
            userName: 'Jack',
            parentId: '655dbeee11c02c8597dce776',
            createId: 1000002,
            updateTime: '2023-11-22T08:23:39.919Z',
            createTime: '2023-11-22T08:23:39.919Z',
            __v: 0
          }
        ]
      }
    ],
    msg: 'success'
  }
})

// 获取当前账号下的所有用户
Mock.mock('/users/all/list', 'get', () => {
  return {
    code: 0,
    data: [
      {
        _id: '655da3bf9d9a408c7dd73212',
        userId: 1000016,
        userName: 'JackMa',
        userEmail: 'jackma@mars.com'
      },
      {
        _id: '655dbdb113ca5a39c96af23c',
        userId: 1000002,
        userName: 'admin',
        userEmail: 'admin@mars.com'
      },
      {
        _id: '655dc448d4dc6d6fda15db92',
        userId: 100017,
        userName: 'JackBean',
        userEmail: 'jackbean@mars.com'
      },
      {
        _id: '655dca3a13ca5a39c96af244',
        userId: 100018,
        userName: '9549587',
        userEmail: '9549587@mars.com'
      },
      {
        _id: '655dcd34d5d1adc632bdd72c',
        userId: 100019,
        userName: 'asdd',
        userEmail: 'asdasdasasd'
      },
      {
        _id: '655dd29d13ca5a39c96af248',
        userId: 100020,
        userName: '1366143860',
        userEmail: '1366143860@mars.com'
      },
      {
        _id: '655dd29d13ca5a39c96af249',
        userId: 100021,
        userName: '375488090',
        userEmail: '375488090@mars.com'
      },
      {
        _id: '655dd29d13ca5a39c96af24a',
        userId: 100022,
        userName: '413401333',
        userEmail: '413401333@mars.com'
      },
      {
        _id: '655dd29d13ca5a39c96af24b',
        userId: 100023,
        userName: '1050732226',
        userEmail: '1050732226@mars.com'
      },
      {
        _id: '655dd29d13ca5a39c96af24c',
        userId: 100024,
        userName: '191337035',
        userEmail: '191337035@mars.com'
      },
      {
        _id: '655dd29d13ca5a39c96af24d',
        userId: 100025,
        userName: '717210290',
        userEmail: '717210290@mars.com'
      },
      {
        _id: '655dd29d13ca5a39c96af24e',
        userId: 100026,
        userName: '742596464',
        userEmail: '742596464@mars.com'
      },
      {
        _id: '655dd29d13ca5a39c96af24f',
        userId: 100027,
        userName: '475721797',
        userEmail: '475721797@mars.com'
      },
      {
        _id: '655dd29d13ca5a39c96af250',
        userId: 100028,
        userName: '1667519970',
        userEmail: '1667519970@mars.com'
      },
      {
        _id: '655dd29d13ca5a39c96af251',
        userId: 100029,
        userName: '2793368228',
        userEmail: '2793368228@mars.com'
      },
      {
        _id: '655dd32713ca5a39c96af257',
        userId: 100030,
        userName: '3440204173',
        userEmail: '3440204173@mars.com'
      },
      {
        _id: '655dd400d5d1adc632bdd80b',
        userId: 100031,
        userName: '189363638',
        userEmail: '189363638@mars.com'
      },
      {
        _id: '655dd42bd5d1adc632bdd813',
        userId: 100032,
        userName: '2162797195',
        userEmail: '2162797195@mars.com'
      },
      {
        _id: '655dd43fd5d1adc632bdd819',
        userId: 100033,
        userName: '923946406',
        userEmail: '923946406@mars.com'
      },
      {
        _id: '655dd551d5d1adc632bdd827',
        userId: 100034,
        userName: 'DingPH',
        userEmail: 'DingPH@mars.com'
      },
      {
        _id: '655ddb8b4a54800ac8d56616',
        userId: 100035,
        userName: '97029406',
        userEmail: '97029406@mars.com'
      },
      {
        _id: '655ddba44a54800ac8d56623',
        userId: 100036,
        userName: '992503754',
        userEmail: '992503754@mars.com'
      },
      {
        _id: '655def4f4a54800ac8d56715',
        userId: 100037,
        userName: '907126611',
        userEmail: '907126611@mars.com'
      },
      {
        _id: '655def5c4a54800ac8d5671b',
        userId: 100038,
        userName: '2017782140',
        userEmail: '2017782140@mars.com'
      },
      {
        _id: '655dffd14a54800ac8d567cf',
        userId: 100039,
        userName: '362555069',
        userEmail: '362555069@mars.com'
      },
      {
        _id: '655e04ce4a54800ac8d56827',
        userId: 100040,
        userName: 'cooper',
        userEmail: 'cooper@mars.com'
      },
      {
        _id: '655e104f4a54800ac8d56962',
        userId: 100041,
        userName: '马友朋23',
        userEmail: '123@mars.com'
      },
      {
        _id: '655e17a94a54800ac8d569fb',
        userId: 100042,
        userName: '123456',
        userEmail: '123445@mars.com'
      },
      {
        _id: '655ea4f44a54800ac8d56b49',
        userId: 100043,
        userName: '测飒飒',
        userEmail: '测飒飒@qq.com'
      },
      {
        _id: '655ea52e4a54800ac8d56b5c',
        userId: 100044,
        userName: '擦撒打算',
        userEmail: '啊实打'
      },
      {
        _id: '655ea5504a54800ac8d56b66',
        userId: 100045,
        userName: '阿萨德',
        userEmail: '阿斯达深V'
      },
      {
        _id: '655eb5b34a54800ac8d56cf3',
        userId: 100046,
        userName: '1274390585',
        userEmail: '1274390585@mars.com'
      },
      {
        _id: '655eb7c04a54800ac8d56d0e',
        userId: 100047,
        userName: '1002931123',
        userEmail: '1002931123@mars.com'
      },
      {
        _id: '655eb9b34a54800ac8d56d63',
        userId: 100048,
        userName: '啊实打实',
        userEmail: '萨达'
      },
      {
        _id: '655eb9c54a54800ac8d56d6c',
        userId: 100049,
        userName: '少时诵诗书',
        userEmail: '收拾收拾'
      },
      {
        _id: '655eb9ce4a54800ac8d56d72',
        userId: 100050,
        userName: '是',
        userEmail: '是'
      },
      {
        _id: '655eb9db4a54800ac8d56d78',
        userId: 100051,
        userName: '发',
        userEmail: '不会'
      },
      {
        _id: '655eb9ee4a54800ac8d56d7e',
        userId: 100052,
        userName: '收到',
        userEmail: '收到'
      },
      {
        _id: '655eb9fd4a54800ac8d56d85',
        userId: 100053,
        userName: '是收拾收拾',
        userEmail: '11'
      },
      {
        _id: '655eba664a54800ac8d56dc2',
        userId: 100054,
        userName: '213123123213123',
        userEmail: '123213123123'
      },
      {
        _id: '655ee41d4a54800ac8d56efb',
        userId: 100055,
        userName: '1160704409',
        userEmail: '1160704409@mars.com'
      },
      {
        _id: '655ef7fc4a54800ac8d57025',
        userId: 100056,
        userName: '测试陈庆贤',
        userEmail: '38281@mars.com'
      },
      {
        _id: '655f6dfb4a54800ac8d57e65',
        userId: 100057,
        userName: '648243877',
        userEmail: '648243877@mars.com'
      },
      {
        _id: '656006664a54800ac8d57f85',
        userId: 100058,
        userName: '2062742063',
        userEmail: '2062742063@mars.com'
      },
      {
        _id: '656044d84a54800ac8d5819a',
        userId: 100060,
        userName: '测试账号',
        userEmail: '222'
      },
      {
        _id: '656057dc4a54800ac8d583a2',
        userId: 100061,
        userName: '测试删除1',
        userEmail: 'tt@ww.com'
      },
      {
        _id: '656057e94a54800ac8d583a8',
        userId: 100062,
        userName: '测试删除2',
        userEmail: 'ww@qq.com'
      },
      {
        _id: '656061c84a54800ac8d58478',
        userId: 100063,
        userName: '测试form',
        userEmail: 'ad@mars.com'
      },
      {
        _id: '656099224a54800ac8d586aa',
        userId: 100064,
        userName: '1023057228',
        userEmail: '1023057228@mars.com'
      },
      {
        _id: '65609fef4a54800ac8d58775',
        userId: 100065,
        userName: 'test10',
        userEmail: 'test10@163.com'
      },
      {
        _id: '65614f8a4a54800ac8d58a4c',
        userId: 100066,
        userName: '122699029',
        userEmail: '122699029@mars.com'
      },
      {
        _id: '65616eea4a54800ac8d58ad7',
        userId: 100067,
        userName: '1730307573',
        userEmail: '1730307573@mars.com'
      },
      {
        _id: '65643a794a54800ac8d591b1',
        userId: 100068,
        userName: 'yanbinbin',
        userEmail: 'yanbinbin@mars.com'
      },
      {
        _id: '6564406c4a54800ac8d591e5',
        userId: 100069,
        userName: 'jack1',
        userEmail: 'jack1@qq.com'
      },
      {
        _id: '656449db4a54800ac8d5925d',
        userId: 100070,
        userName: 'sunny1',
        userEmail: 'www@mars.com'
      },
      {
        _id: '65644eb94a54800ac8d592be',
        userId: 100071,
        userName: 'simon',
        userEmail: 'simon@qq.com'
      },
      {
        _id: '656452e94a54800ac8d592e9',
        userId: 100072,
        userName: 'rachel',
        userEmail: 'rachel@mars.com'
      },
      {
        _id: '656457ae4a54800ac8d59312',
        userId: 100073,
        userName: '798565764',
        userEmail: '798565764@mars.com'
      },
      {
        _id: '656461f74a54800ac8d5934f',
        userId: 100074,
        userName: '1471786654',
        userEmail: '1471786654@mars.com'
      },
      {
        _id: '656465ec4a54800ac8d59372',
        userId: 100076,
        userName: 'huangxin',
        userEmail: '2631515140@qq.com'
      },
      {
        _id: '65649dd04a54800ac8d5940b',
        userId: 100077,
        userName: '1915232691',
        userEmail: '1915232691@mars.com'
      },
      {
        _id: '6565caad4a54800ac8d59e0a',
        userId: 100078,
        userName: 'sdfsdfsd',
        userEmail: 'sdfsdfsd@qq.com'
      },
      {
        _id: '6565e1374a54800ac8d59e68',
        userId: 100082,
        userName: 'jack11',
        userEmail: 'jack11@mars.com'
      },
      {
        _id: '6566b76d4a54800ac8d5a261',
        userId: 100084,
        userName: 'jack2',
        userEmail: 'jack2@mars.com'
      },
      {
        _id: '6566ba6f4a54800ac8d5a288',
        userId: 100085,
        userName: 'jack3',
        userEmail: 'jack3@mars.com'
      },
      {
        _id: '6566c7914a54800ac8d5a2f3',
        userId: 100086,
        userName: 'jack12',
        userEmail: 'jack12@mars.com'
      },
      {
        _id: '6566e9334a54800ac8d5a3eb',
        userId: 100087,
        userName: '2996130235',
        userEmail: '2996130235@mars.com'
      },
      {
        _id: '656711014a54800ac8d5a906',
        userId: 100088,
        userName: '1572226525',
        userEmail: '1572226525@mars.com'
      },
      {
        _id: '6567f9974a54800ac8d5acbc',
        userId: 100094,
        userName: '524669682',
        userEmail: '524669682@mars.com'
      },
      {
        _id: '65681a4b4a54800ac8d5ae0d',
        userId: 100097,
        userName: 'will',
        userEmail: '376588090@qq.com'
      },
      {
        _id: '65681ad24a54800ac8d5ae14',
        userId: 100098,
        userName: 'willying',
        userEmail: '2668606360@qq.com'
      },
      {
        _id: '6569465f4a54800ac8d5b255',
        userId: 100099,
        userName: '282543703',
        userEmail: '282543703@mars.com'
      },
      {
        _id: '656970ee4a54800ac8d5b4ee',
        userId: 100100,
        userName: '2752434595',
        userEmail: '2752434595@mars.com'
      },
      {
        _id: '656971684a54800ac8d5b4fb',
        userId: 100101,
        userName: 'Joe',
        userEmail: 'joe123@qq.com'
      },
      {
        _id: '656989414a54800ac8d5b561',
        userId: 100102,
        userName: 'jinbudaily',
        userEmail: 'jinbudaily@mars.com'
      },
      {
        _id: '6569a9404a54800ac8d5b640',
        userId: 100103,
        userName: '65876295',
        userEmail: '65876295@mars.com'
      },
      {
        _id: '6569aabe4a54800ac8d5b662',
        userId: 100104,
        userName: 'coderwhat',
        userEmail: 'sha@mars.com'
      },
      {
        _id: '656ae53f4a54800ac8d5ba2f',
        userId: 100105,
        userName: '1194657256',
        userEmail: '1194657256@mars.com'
      },
      {
        _id: '656b1fff4a54800ac8d5c129',
        userId: 100106,
        userName: 'jucc',
        userEmail: 'jucc@qq.com'
      },
      {
        _id: '656b20464a54800ac8d5c12f',
        userId: 100107,
        userName: 'aaa',
        userEmail: 'aa@qq.com'
      },
      {
        _id: '656d33394a54800ac8d5e186',
        userId: 100108,
        userName: '应磊',
        userEmail: '26686063560@qq.com'
      },
      {
        _id: '656d40394a54800ac8d5e370',
        userId: 100109,
        userName: 'maoxuan',
        userEmail: 'maoxuan@qq.com'
      },
      {
        _id: '656d4ac14a54800ac8d5e4b5',
        userId: 100110,
        userName: '何欢',
        userEmail: '1231223213212@qq.com'
      },
      {
        _id: '656d4c3a4a54800ac8d5e4dc',
        userId: 100111,
        userName: '小猪',
        userEmail: 'xiaozhu@qq.com'
      },
      {
        _id: '656d4d054a54800ac8d5e507',
        userId: 100112,
        userName: '刘强东',
        userEmail: 'liuqiangdong@qq.com'
      },
      {
        _id: '656d4d2c4a54800ac8d5e50f',
        userId: 100113,
        userName: '马云',
        userEmail: 'mayun@qq.com'
      },
      {
        _id: '656d62154a54800ac8d5e577',
        userId: 100114,
        userName: 'jack',
        userEmail: 'jack@qq.com'
      },
      {
        _id: '656d65f04a54800ac8d5e5f7',
        userId: 100115,
        userName: 'jackMa',
        userEmail: '376588090'
      },
      {
        _id: '656ee6f14a54800ac8d5f75b',
        userId: 100120,
        userName: 'jack01',
        userEmail: 'jack01@mars.com'
      },
      {
        _id: '656eeb2a4a54800ac8d5f7c4',
        userId: 100121,
        userName: '241729064',
        userEmail: '241729064@mars.com'
      },
      {
        _id: '656f09134a54800ac8d5f907',
        userId: 100122,
        userName: 'jackkkk',
        userEmail: 'jackkkk@mars.com'
      },
      {
        _id: '656f093d4a54800ac8d5f90f',
        userId: 100123,
        userName: 'DingDing',
        userEmail: 'DingDing@mars.com'
      },
      {
        _id: '656f179b4a54800ac8d5f9a5',
        userId: 100124,
        userName: '陈腾',
        userEmail: 'ct@mars.com'
      },
      {
        _id: '656f32fa4a54800ac8d5fba1',
        userId: 100125,
        userName: 'dongDong',
        userEmail: 'dong@mars.com'
      },
      {
        _id: '656f338a4a54800ac8d5fba9',
        userId: 100126,
        userName: 'pengFei',
        userEmail: 'fei@mars.com'
      },
      {
        _id: '65702ad94a54800ac8d5ffa9',
        userId: 100127,
        userName: '1161198485',
        userEmail: '1161198485@mars.com'
      },
      {
        _id: '6570721d4a54800ac8d60237',
        userId: 100128,
        userName: '郭景馨',
        userEmail: 'xinxin@mars.com'
      },
      {
        _id: '657072424a54800ac8d60249',
        userId: 100129,
        userName: '刘冰倩',
        userEmail: 'bingbing@mars.com'
      },
      {
        _id: '657072674a54800ac8d6024f',
        userId: 100130,
        userName: '曹鹏飞',
        userEmail: 'feifei@mars.com'
      },
      {
        _id: '657072ac4a54800ac8d60268',
        userId: 100131,
        userName: '袁冬冬',
        userEmail: 'dd@mars.com'
      },
      {
        _id: '657072e04a54800ac8d60270',
        userId: 100132,
        userName: '宋彩霞',
        userEmail: 'xia@mars.com'
      },
      {
        _id: '6570733f4a54800ac8d60280',
        userId: 100133,
        userName: '张兴伟',
        userEmail: 'wei@mars.com'
      },
      {
        _id: '6570735b4a54800ac8d60286',
        userId: 100134,
        userName: '王建功',
        userEmail: 'gong@mars.com'
      },
      {
        _id: '6570741d4a54800ac8d6029f',
        userId: 100135,
        userName: '魏天雨',
        userEmail: 'yuyu@mars.com'
      },
      {
        _id: '6570743a4a54800ac8d602a6',
        userId: 100136,
        userName: '李天乐',
        userEmail: 'lele@mars.com'
      },
      {
        _id: '657074554a54800ac8d602ae',
        userId: 100137,
        userName: '赵鹏飞',
        userEmail: 'peng@mars.com'
      },
      {
        _id: '6570746f4a54800ac8d602b4',
        userId: 100138,
        userName: '陈亚宁',
        userEmail: 'ning@mars.com'
      },
      {
        _id: '657074854a54800ac8d602bd',
        userId: 100139,
        userName: '韩召军',
        userEmail: 'jun@mars.com'
      },
      {
        _id: '657074b14a54800ac8d602c3',
        userId: 100140,
        userName: '吴成稳',
        userEmail: 'wen@mars.com'
      },
      {
        _id: '657074d64a54800ac8d602c9',
        userId: 100141,
        userName: '石凯',
        userEmail: 'kai@mars.com'
      },
      {
        _id: '65712ce84a54800ac8d605d2',
        userId: 100142,
        userName: '曹兴',
        userEmail: 'xing@mars.com'
      },
      {
        _id: '65712d2a4a54800ac8d605d8',
        userId: 100143,
        userName: '李彪',
        userEmail: 'biao@mars.com'
      },
      {
        _id: '6571355c4a54800ac8d60629',
        userId: 100144,
        userName: '阎昊',
        userEmail: 'hao@mars.com'
      },
      {
        _id: '65719d394a54800ac8d618b6',
        userId: 100145,
        userName: '1642748312',
        userEmail: '1642748312@mars.com'
      },
      {
        _id: '6571ba314a54800ac8d619bc',
        userId: 100146,
        userName: 'rachel3',
        userEmail: 'rachel3@mars.com'
      },
      {
        _id: '6571bdfa4a54800ac8d61a50',
        userId: 100147,
        userName: 'hushukang',
        userEmail: 'hushukang@mars.com'
      },
      {
        _id: '65726e864a54800ac8d61c79',
        userId: 100151,
        userName: '白钰航',
        userEmail: 'xiaobai@mars.com'
      },
      {
        _id: '6572bf4a4a54800ac8d6208f',
        userId: 100152,
        userName: 'rachel2',
        userEmail: 'rachel2@mars.com'
      },
      {
        _id: '6572bf594a54800ac8d62096',
        userId: 100153,
        userName: 'rachel4',
        userEmail: 'rachel4@mars.com'
      },
      {
        _id: '6572c1e44a54800ac8d620d7',
        userId: 100154,
        userName: '1457798991',
        userEmail: '1457798991@mars.com'
      },
      {
        _id: '65730d7f4a54800ac8d62528',
        userId: 100155,
        userName: 'lishaojun',
        userEmail: 'lishaojun@mars.com'
      },
      {
        _id: '657317db4a54800ac8d6256f',
        userId: 100156,
        userName: 'Rmx0930',
        userEmail: 'Rmx0930@mars.com'
      },
      {
        _id: '657422a14a54800ac8d62923',
        userId: 100157,
        userName: 'simon22',
        userEmail: 'simon@gmail.com'
      },
      {
        _id: '657467394a54800ac8d62ae1',
        userId: 100158,
        userName: '123',
        userEmail: '345'
      },
      {
        _id: '65747c5d4a54800ac8d62be0',
        userId: 100159,
        userName: '12345',
        userEmail: '123@qq.com'
      },
      {
        _id: '65747c824a54800ac8d62bf3',
        userId: 100160,
        userName: '333445',
        userEmail: '222@qq.com'
      },
      {
        _id: '657672344a54800ac8d6381b',
        userId: 100161,
        userName: '1290833039',
        userEmail: '1290833039@mars.com'
      },
      {
        _id: '65781a754a54800ac8d664a3',
        userId: 100162,
        userName: 'tests',
        userEmail: 'test@qq.com'
      },
      {
        _id: '657830c84a54800ac8d66d37',
        userId: 100164,
        userName: 'xuebao',
        userEmail: 'xuebao@qq.com'
      },
      {
        _id: '657839fd4a54800ac8d66dd3',
        userId: 100165,
        userName: 'xuebaoTest',
        userEmail: '123@test.com'
      },
      {
        _id: '65783a2f4a54800ac8d66ddf',
        userId: 100166,
        userName: 'a15601060930',
        userEmail: '123q@test.com'
      },
      {
        _id: '6578792b4a54800ac8d6733c',
        userId: 100167,
        userName: 'Vue',
        userEmail: '375488090@qq.com'
      },
      {
        _id: '65788a3b4a54800ac8d674b8',
        userId: 100168,
        userName: 'typescript',
        userEmail: 'typescript@qq.com'
      },
      {
        _id: '65788a644a54800ac8d674be',
        userId: 100169,
        userName: 'javascript',
        userEmail: 'javascript@qq.com'
      },
      {
        _id: '6579ac964a54800ac8d68765',
        userId: 100170,
        userName: 'A1王净涛',
        userEmail: 'wang@qq.com'
      },
      {
        _id: '6579adde4a54800ac8d687c7',
        userId: 100171,
        userName: 'Armxx',
        userEmail: 'rmx@qq.com'
      },
      {
        _id: '6579ae214a54800ac8d687d7',
        userId: 100172,
        userName: 'A1rmx',
        userEmail: 'rmxx@qq.com'
      },
      {
        _id: '6579b3844a54800ac8d688e5',
        userId: 100173,
        userName: '1364144616',
        userEmail: '1364144616@mars.com'
      },
      {
        _id: '657ab06c4a54800ac8d6999d',
        userId: 100174,
        userName: '2316253301',
        userEmail: '2316253301@mars.com'
      },
      {
        _id: '657ab98f4a54800ac8d69cc9',
        userId: 100176,
        userName: 'asd',
        userEmail: 'asd@qq.com'
      },
      {
        _id: '657ac4b24a54800ac8d69f61',
        userId: 100177,
        userName: 'jhasdh',
        userEmail: 'jhasdh@qq.com'
      }
    ],
    msg: 'success'
  }
})

// 创建部门
Mock.mock('/dept/create', 'post', () => {
  return {
    code: 0,
    data: {},
    msg: 'success'
  }
})

// 编辑部门
Mock.mock('/dept/edit', 'post', () => {
  return {
    code: 0,
    data: {},
    msg: 'success'
  }
})

// 删除部门
Mock.mock('/dept/delete', 'post', () => {
  return {
    code: 0,
    data: {},
    msg: 'success'
  }
})

// 菜单列表
Mock.mock(/\/menu\/list/, 'get', () => {
  return {
    code: 0,
    data: [
      {
        _id: '655db45ff10762608048caec',
        menuType: 1,
        menuName: '工作台',
        path: '/dashboard',
        icon: 'DesktopOutlined',
        orderBy: 0,
        menuState: 1,
        parentId: '',
        createId: 1000002,
        createTime: '2023-11-22T07:50:59.931Z',
        updateTime: '2023-11-22T08:27:07.828Z',
        __v: 0,
        children: [
          {
            _id: '655db4a4f10762608048caf4',
            menuType: 2,
            menuName: '查看',
            menuCode: 'home@query',
            orderBy: 0,
            menuState: 1,
            parentId: '655db45ff10762608048caec',
            createId: 1000002,
            createTime: '2023-11-22T07:50:59.931Z',
            updateTime: '2023-11-22T07:50:59.931Z',
            __v: 0
          }
        ],
        buttons: [
          {
            _id: '655db4a4f10762608048caf4',
            menuType: 2,
            menuName: '查看',
            menuCode: 'home@query',
            orderBy: 0,
            menuState: 1,
            parentId: '655db45ff10762608048caec',
            createId: 1000002,
            createTime: '2023-11-22T07:50:59.931Z',
            updateTime: '2023-11-22T07:50:59.931Z',
            __v: 0
          }
        ]
      },
      {
        _id: '655db520f10762608048cafa',
        menuType: 1,
        menuName: '用户管理',
        path: '',
        icon: 'UsergroupAddOutlined',
        orderBy: 1,
        menuState: 1,
        parentId: '',
        createId: 1000002,
        createTime: '2023-11-22T07:50:59.931Z',
        updateTime: '2023-11-22T07:50:59.931Z',
        __v: 0,
        children: [
          {
            _id: '655db546f10762608048cafe',
            menuType: 1,
            menuName: '用户列表',
            path: '/userList',
            icon: 'UserOutlined',
            orderBy: 0,
            menuState: 1,
            parentId: '655db520f10762608048cafa',
            createId: 1000002,
            createTime: '2023-11-22T07:50:59.931Z',
            updateTime: '2023-11-22T08:27:42.307Z',
            __v: 0,
            children: [
              {
                _id: '655db556f10762608048cb02',
                menuType: 2,
                menuName: '查看',
                menuCode: 'user@query',
                orderBy: 0,
                menuState: 1,
                parentId: '655db546f10762608048cafe',
                createId: 1000002,
                createTime: '2023-11-22T07:50:59.931Z',
                updateTime: '2023-11-22T07:50:59.931Z',
                __v: 0
              },
              {
                _id: '655dc53ed4dc6d6fda15dbad',
                menuType: 2,
                menuName: '新增',
                menuCode: 'user@create',
                orderBy: 1,
                menuState: 1,
                parentId: '655db546f10762608048cafe',
                createId: 1000002,
                createTime: '2023-11-22T08:52:47.967Z',
                updateTime: '2023-11-22T08:52:47.967Z',
                __v: 0
              },
              {
                _id: '655dc67ed4dc6d6fda15dbc7',
                menuType: 2,
                menuName: '编辑',
                menuCode: 'user@edit',
                orderBy: 2,
                menuState: 1,
                parentId: '655db546f10762608048cafe',
                createId: 1000002,
                createTime: '2023-11-22T08:52:47.967Z',
                updateTime: '2023-11-22T08:52:47.967Z',
                __v: 0
              },
              {
                _id: '655dc68ad4dc6d6fda15dbcb',
                menuType: 2,
                menuName: '删除',
                menuCode: 'user@delete',
                orderBy: 3,
                menuState: 1,
                parentId: '655db546f10762608048cafe',
                createId: 1000002,
                createTime: '2023-11-22T08:52:47.967Z',
                updateTime: '2023-11-22T08:52:47.967Z',
                __v: 0
              }
            ],
            buttons: [
              {
                _id: '655db556f10762608048cb02',
                menuType: 2,
                menuName: '查看',
                menuCode: 'user@query',
                orderBy: 0,
                menuState: 1,
                parentId: '655db546f10762608048cafe',
                createId: 1000002,
                createTime: '2023-11-22T07:50:59.931Z',
                updateTime: '2023-11-22T07:50:59.931Z',
                __v: 0
              },
              {
                _id: '655dc53ed4dc6d6fda15dbad',
                menuType: 2,
                menuName: '新增',
                menuCode: 'user@create',
                orderBy: 1,
                menuState: 1,
                parentId: '655db546f10762608048cafe',
                createId: 1000002,
                createTime: '2023-11-22T08:52:47.967Z',
                updateTime: '2023-11-22T08:52:47.967Z',
                __v: 0
              },
              {
                _id: '655dc67ed4dc6d6fda15dbc7',
                menuType: 2,
                menuName: '编辑',
                menuCode: 'user@edit',
                orderBy: 2,
                menuState: 1,
                parentId: '655db546f10762608048cafe',
                createId: 1000002,
                createTime: '2023-11-22T08:52:47.967Z',
                updateTime: '2023-11-22T08:52:47.967Z',
                __v: 0
              },
              {
                _id: '655dc68ad4dc6d6fda15dbcb',
                menuType: 2,
                menuName: '删除',
                menuCode: 'user@delete',
                orderBy: 3,
                menuState: 1,
                parentId: '655db546f10762608048cafe',
                createId: 1000002,
                createTime: '2023-11-22T08:52:47.967Z',
                updateTime: '2023-11-22T08:52:47.967Z',
                __v: 0
              }
            ]
          },
          {
            _id: '655db59bf10762608048cb06',
            menuType: 1,
            menuName: '菜单管理',
            path: '/menuList',
            icon: 'MenuOutlined',
            orderBy: 1,
            menuState: 1,
            parentId: '655db520f10762608048cafa',
            createId: 1000002,
            createTime: '2023-11-22T07:50:59.931Z',
            updateTime: '2023-11-22T07:50:59.931Z',
            __v: 0,
            children: [
              {
                _id: '655db5a8f10762608048cb0a',
                menuType: 2,
                menuName: '查看',
                menuCode: 'menu@queyr',
                orderBy: 0,
                menuState: 1,
                parentId: '655db59bf10762608048cb06',
                createId: 1000002,
                createTime: '2023-11-22T07:50:59.931Z',
                updateTime: '2023-11-22T07:50:59.931Z',
                __v: 0
              },
              {
                _id: '655dc69bd4dc6d6fda15dbcf',
                menuType: 2,
                menuName: '新增',
                menuCode: 'menu@create',
                orderBy: 1,
                menuState: 1,
                parentId: '655db59bf10762608048cb06',
                createId: 1000002,
                createTime: '2023-11-22T08:52:47.967Z',
                updateTime: '2023-11-22T08:52:47.967Z',
                __v: 0
              },
              {
                _id: '655dc6a5d4dc6d6fda15dbd3',
                menuType: 2,
                menuName: '编辑',
                menuCode: 'menu@edit',
                orderBy: 2,
                menuState: 1,
                parentId: '655db59bf10762608048cb06',
                createId: 1000002,
                createTime: '2023-11-22T08:52:47.967Z',
                updateTime: '2023-11-22T08:52:47.967Z',
                __v: 0
              },
              {
                _id: '655dc6afd4dc6d6fda15dbd7',
                menuType: 2,
                menuName: '删除',
                menuCode: 'menu@delete',
                orderBy: 3,
                menuState: 1,
                parentId: '655db59bf10762608048cb06',
                createId: 1000002,
                createTime: '2023-11-22T08:52:47.967Z',
                updateTime: '2023-11-22T08:52:47.967Z',
                __v: 0
              }
            ],
            buttons: [
              {
                _id: '655db5a8f10762608048cb0a',
                menuType: 2,
                menuName: '查看',
                menuCode: 'menu@queyr',
                orderBy: 0,
                menuState: 1,
                parentId: '655db59bf10762608048cb06',
                createId: 1000002,
                createTime: '2023-11-22T07:50:59.931Z',
                updateTime: '2023-11-22T07:50:59.931Z',
                __v: 0
              },
              {
                _id: '655dc69bd4dc6d6fda15dbcf',
                menuType: 2,
                menuName: '新增',
                menuCode: 'menu@create',
                orderBy: 1,
                menuState: 1,
                parentId: '655db59bf10762608048cb06',
                createId: 1000002,
                createTime: '2023-11-22T08:52:47.967Z',
                updateTime: '2023-11-22T08:52:47.967Z',
                __v: 0
              },
              {
                _id: '655dc6a5d4dc6d6fda15dbd3',
                menuType: 2,
                menuName: '编辑',
                menuCode: 'menu@edit',
                orderBy: 2,
                menuState: 1,
                parentId: '655db59bf10762608048cb06',
                createId: 1000002,
                createTime: '2023-11-22T08:52:47.967Z',
                updateTime: '2023-11-22T08:52:47.967Z',
                __v: 0
              },
              {
                _id: '655dc6afd4dc6d6fda15dbd7',
                menuType: 2,
                menuName: '删除',
                menuCode: 'menu@delete',
                orderBy: 3,
                menuState: 1,
                parentId: '655db59bf10762608048cb06',
                createId: 1000002,
                createTime: '2023-11-22T08:52:47.967Z',
                updateTime: '2023-11-22T08:52:47.967Z',
                __v: 0
              }
            ]
          },
          {
            _id: '655db5c7f10762608048cb0e',
            menuType: 1,
            menuName: '角色管理',
            path: '/roleList',
            icon: 'TrademarkCircleOutlined',
            orderBy: 2,
            menuState: 1,
            parentId: '655db520f10762608048cafa',
            createId: 1000002,
            createTime: '2023-11-22T07:50:59.931Z',
            updateTime: '2023-11-22T07:50:59.931Z',
            __v: 0,
            children: [
              {
                _id: '655dbb0011c02c8597dce710',
                menuType: 2,
                menuName: '查看',
                icon: 'role@query',
                orderBy: 0,
                menuState: 1,
                parentId: '655db5c7f10762608048cb0e',
                createId: 1000002,
                createTime: '2023-11-22T08:23:39.918Z',
                updateTime: '2023-11-22T08:40:20.527Z',
                __v: 0,
                menuCode: 'role@query'
              },
              {
                _id: '655dc6c7d4dc6d6fda15dbdb',
                menuType: 2,
                menuName: '编辑',
                menuCode: 'role@edit',
                orderBy: 1,
                menuState: 1,
                parentId: '655db5c7f10762608048cb0e',
                createId: 1000002,
                createTime: '2023-11-22T08:52:47.967Z',
                updateTime: '2023-11-22T08:52:47.967Z',
                __v: 0
              },
              {
                _id: '655dc6d3d4dc6d6fda15dbdf',
                menuType: 2,
                menuName: '设置权限',
                menuCode: 'role@setting',
                orderBy: 2,
                menuState: 1,
                parentId: '655db5c7f10762608048cb0e',
                createId: 1000002,
                createTime: '2023-11-22T08:52:47.967Z',
                updateTime: '2023-11-22T08:52:47.967Z',
                __v: 0
              },
              {
                _id: '655dc6ddd4dc6d6fda15dbe3',
                menuType: 2,
                menuName: '删除',
                menuCode: 'role@delete',
                orderBy: 3,
                menuState: 1,
                parentId: '655db5c7f10762608048cb0e',
                createId: 1000002,
                createTime: '2023-11-22T08:52:47.967Z',
                updateTime: '2023-11-22T08:52:47.967Z',
                __v: 0
              }
            ],
            buttons: [
              {
                _id: '655dbb0011c02c8597dce710',
                menuType: 2,
                menuName: '查看',
                icon: 'role@query',
                orderBy: 0,
                menuState: 1,
                parentId: '655db5c7f10762608048cb0e',
                createId: 1000002,
                createTime: '2023-11-22T08:23:39.918Z',
                updateTime: '2023-11-22T08:40:20.527Z',
                __v: 0,
                menuCode: 'role@query'
              },
              {
                _id: '655dc6c7d4dc6d6fda15dbdb',
                menuType: 2,
                menuName: '编辑',
                menuCode: 'role@edit',
                orderBy: 1,
                menuState: 1,
                parentId: '655db5c7f10762608048cb0e',
                createId: 1000002,
                createTime: '2023-11-22T08:52:47.967Z',
                updateTime: '2023-11-22T08:52:47.967Z',
                __v: 0
              },
              {
                _id: '655dc6d3d4dc6d6fda15dbdf',
                menuType: 2,
                menuName: '设置权限',
                menuCode: 'role@setting',
                orderBy: 2,
                menuState: 1,
                parentId: '655db5c7f10762608048cb0e',
                createId: 1000002,
                createTime: '2023-11-22T08:52:47.967Z',
                updateTime: '2023-11-22T08:52:47.967Z',
                __v: 0
              },
              {
                _id: '655dc6ddd4dc6d6fda15dbe3',
                menuType: 2,
                menuName: '删除',
                menuCode: 'role@delete',
                orderBy: 3,
                menuState: 1,
                parentId: '655db5c7f10762608048cb0e',
                createId: 1000002,
                createTime: '2023-11-22T08:52:47.967Z',
                updateTime: '2023-11-22T08:52:47.967Z',
                __v: 0
              }
            ]
          },
          {
            _id: '655dbbb911c02c8597dce71c',
            menuType: 1,
            menuName: '部门管理',
            path: '/deptList',
            icon: 'SendOutlined',
            orderBy: 3,
            menuState: 1,
            parentId: '655db520f10762608048cafa',
            createId: 1000002,
            createTime: '2023-11-22T08:23:39.918Z',
            updateTime: '2023-11-22T08:23:39.918Z',
            __v: 0,
            children: [
              {
                _id: '655dbbc411c02c8597dce720',
                menuType: 2,
                menuName: '查看',
                menuCode: 'dept@query',
                orderBy: 0,
                menuState: 1,
                parentId: '655dbbb911c02c8597dce71c',
                createId: 1000002,
                createTime: '2023-11-22T08:23:39.918Z',
                updateTime: '2023-11-22T08:23:39.918Z',
                __v: 0
              },
              {
                _id: '655dc6f4d4dc6d6fda15dbe7',
                menuType: 2,
                menuName: '新增',
                menuCode: 'dept@create',
                orderBy: 1,
                menuState: 1,
                parentId: '655dbbb911c02c8597dce71c',
                createId: 1000002,
                createTime: '2023-11-22T08:52:47.967Z',
                updateTime: '2023-11-22T08:52:47.967Z',
                __v: 0
              },
              {
                _id: '655dc6fdd4dc6d6fda15dbeb',
                menuType: 2,
                menuName: '编辑',
                menuCode: 'dept@edit',
                orderBy: 2,
                menuState: 1,
                parentId: '655dbbb911c02c8597dce71c',
                createId: 1000002,
                createTime: '2023-11-22T08:52:47.967Z',
                updateTime: '2023-11-22T08:52:47.967Z',
                __v: 0
              },
              {
                _id: '655dc708d4dc6d6fda15dbef',
                menuType: 2,
                menuName: '删除',
                menuCode: 'dept@delete',
                orderBy: 3,
                menuState: 1,
                parentId: '655dbbb911c02c8597dce71c',
                createId: 1000002,
                createTime: '2023-11-22T08:52:47.967Z',
                updateTime: '2023-11-22T08:52:47.967Z',
                __v: 0
              }
            ],
            buttons: [
              {
                _id: '655dbbc411c02c8597dce720',
                menuType: 2,
                menuName: '查看',
                menuCode: 'dept@query',
                orderBy: 0,
                menuState: 1,
                parentId: '655dbbb911c02c8597dce71c',
                createId: 1000002,
                createTime: '2023-11-22T08:23:39.918Z',
                updateTime: '2023-11-22T08:23:39.918Z',
                __v: 0
              },
              {
                _id: '655dc6f4d4dc6d6fda15dbe7',
                menuType: 2,
                menuName: '新增',
                menuCode: 'dept@create',
                orderBy: 1,
                menuState: 1,
                parentId: '655dbbb911c02c8597dce71c',
                createId: 1000002,
                createTime: '2023-11-22T08:52:47.967Z',
                updateTime: '2023-11-22T08:52:47.967Z',
                __v: 0
              },
              {
                _id: '655dc6fdd4dc6d6fda15dbeb',
                menuType: 2,
                menuName: '编辑',
                menuCode: 'dept@edit',
                orderBy: 2,
                menuState: 1,
                parentId: '655dbbb911c02c8597dce71c',
                createId: 1000002,
                createTime: '2023-11-22T08:52:47.967Z',
                updateTime: '2023-11-22T08:52:47.967Z',
                __v: 0
              },
              {
                _id: '655dc708d4dc6d6fda15dbef',
                menuType: 2,
                menuName: '删除',
                menuCode: 'dept@delete',
                orderBy: 3,
                menuState: 1,
                parentId: '655dbbb911c02c8597dce71c',
                createId: 1000002,
                createTime: '2023-11-22T08:52:47.967Z',
                updateTime: '2023-11-22T08:52:47.967Z',
                __v: 0
              }
            ]
          }
        ]
      },
      {
        _id: '655dbc1e11c02c8597dce724',
        menuType: 1,
        menuName: '订单管理',
        icon: 'CloudOutlined',
        orderBy: 2,
        menuState: 1,
        parentId: '',
        createId: 1000002,
        createTime: '2023-11-22T08:23:39.918Z',
        updateTime: '2023-11-22T08:23:39.918Z',
        __v: 0,
        children: [
          {
            _id: '655dbc3811c02c8597dce728',
            menuType: 1,
            menuName: '订单列表',
            path: '/orderList',
            icon: 'BarsOutlined',
            orderBy: 0,
            menuState: 1,
            parentId: '655dbc1e11c02c8597dce724',
            createId: 1000002,
            createTime: '2023-11-22T08:23:39.918Z',
            updateTime: '2023-11-22T08:23:39.918Z',
            __v: 0,
            children: [
              {
                _id: '655dbc4d11c02c8597dce72c',
                menuType: 2,
                menuName: '详情',
                menuCode: 'order@detail',
                orderBy: 0,
                menuState: 1,
                parentId: '655dbc3811c02c8597dce728',
                createId: 1000002,
                createTime: '2023-11-22T08:23:39.918Z',
                updateTime: '2023-11-22T09:17:29.680Z',
                __v: 0
              },
              {
                _id: '655dc735d4dc6d6fda15dbf6',
                menuType: 2,
                menuName: '打点',
                menuCode: 'order@point',
                orderBy: 1,
                menuState: 1,
                parentId: '655dbc3811c02c8597dce728',
                createId: 1000002,
                createTime: '2023-11-22T08:52:47.967Z',
                updateTime: '2023-11-22T08:52:47.967Z',
                __v: 0
              },
              {
                _id: '655dc73fd4dc6d6fda15dbfa',
                menuType: 2,
                menuName: '轨迹',
                menuCode: 'order@route',
                orderBy: 2,
                menuState: 1,
                parentId: '655dbc3811c02c8597dce728',
                createId: 1000002,
                createTime: '2023-11-22T08:52:47.967Z',
                updateTime: '2023-11-22T08:52:47.967Z',
                __v: 0
              },
              {
                _id: '655dc74cd4dc6d6fda15dbfe',
                menuType: 2,
                menuName: '删除',
                menuCode: 'order@delete',
                orderBy: 3,
                menuState: 1,
                parentId: '655dbc3811c02c8597dce728',
                createId: 1000002,
                createTime: '2023-11-22T08:52:47.967Z',
                updateTime: '2023-11-22T08:52:47.967Z',
                __v: 0
              }
            ],
            buttons: [
              {
                _id: '655dbc4d11c02c8597dce72c',
                menuType: 2,
                menuName: '详情',
                menuCode: 'order@detail',
                orderBy: 0,
                menuState: 1,
                parentId: '655dbc3811c02c8597dce728',
                createId: 1000002,
                createTime: '2023-11-22T08:23:39.918Z',
                updateTime: '2023-11-22T09:17:29.680Z',
                __v: 0
              },
              {
                _id: '655dc735d4dc6d6fda15dbf6',
                menuType: 2,
                menuName: '打点',
                menuCode: 'order@point',
                orderBy: 1,
                menuState: 1,
                parentId: '655dbc3811c02c8597dce728',
                createId: 1000002,
                createTime: '2023-11-22T08:52:47.967Z',
                updateTime: '2023-11-22T08:52:47.967Z',
                __v: 0
              },
              {
                _id: '655dc73fd4dc6d6fda15dbfa',
                menuType: 2,
                menuName: '轨迹',
                menuCode: 'order@route',
                orderBy: 2,
                menuState: 1,
                parentId: '655dbc3811c02c8597dce728',
                createId: 1000002,
                createTime: '2023-11-22T08:52:47.967Z',
                updateTime: '2023-11-22T08:52:47.967Z',
                __v: 0
              },
              {
                _id: '655dc74cd4dc6d6fda15dbfe',
                menuType: 2,
                menuName: '删除',
                menuCode: 'order@delete',
                orderBy: 3,
                menuState: 1,
                parentId: '655dbc3811c02c8597dce728',
                createId: 1000002,
                createTime: '2023-11-22T08:52:47.967Z',
                updateTime: '2023-11-22T08:52:47.967Z',
                __v: 0
              }
            ]
          },
          {
            _id: '655dbc6c11c02c8597dce730',
            menuType: 1,
            menuName: '订单聚合',
            path: '/cluster',
            icon: 'DotChartOutlined',
            orderBy: 1,
            menuState: 1,
            parentId: '655dbc1e11c02c8597dce724',
            createId: 1000002,
            createTime: '2023-11-22T08:23:39.918Z',
            updateTime: '2023-11-22T08:23:39.918Z',
            __v: 0,
            children: [
              {
                _id: '655dbc7911c02c8597dce734',
                menuType: 2,
                menuName: '查看',
                menuCode: 'cluster@query',
                orderBy: 0,
                menuState: 1,
                parentId: '655dbc6c11c02c8597dce730',
                createId: 1000002,
                createTime: '2023-11-22T08:23:39.918Z',
                updateTime: '2023-11-22T08:23:39.918Z',
                __v: 0
              }
            ],
            buttons: [
              {
                _id: '655dbc7911c02c8597dce734',
                menuType: 2,
                menuName: '查看',
                menuCode: 'cluster@query',
                orderBy: 0,
                menuState: 1,
                parentId: '655dbc6c11c02c8597dce730',
                createId: 1000002,
                createTime: '2023-11-22T08:23:39.918Z',
                updateTime: '2023-11-22T08:23:39.918Z',
                __v: 0
              }
            ]
          },
          {
            _id: '655dbca311c02c8597dce738',
            menuType: 1,
            menuName: '司机列表',
            path: '/driverList',
            icon: 'PayCircleOutlined',
            orderBy: 2,
            menuState: 1,
            parentId: '655dbc1e11c02c8597dce724',
            createId: 1000002,
            createTime: '2023-11-22T08:23:39.918Z',
            updateTime: '2023-11-22T08:23:39.918Z',
            __v: 0,
            children: [
              {
                _id: '655dbcb011c02c8597dce73c',
                menuType: 2,
                menuName: '查看',
                menuCode: 'driverList@query',
                orderBy: 0,
                menuState: 1,
                parentId: '655dbca311c02c8597dce738',
                createId: 1000002,
                createTime: '2023-11-22T08:23:39.918Z',
                updateTime: '2023-11-22T08:23:39.918Z',
                __v: 0
              }
            ],
            buttons: [
              {
                _id: '655dbcb011c02c8597dce73c',
                menuType: 2,
                menuName: '查看',
                menuCode: 'driverList@query',
                orderBy: 0,
                menuState: 1,
                parentId: '655dbca311c02c8597dce738',
                createId: 1000002,
                createTime: '2023-11-22T08:23:39.918Z',
                updateTime: '2023-11-22T08:23:39.918Z',
                __v: 0
              }
            ]
          }
        ]
      }
    ],
    msg: 'success'
  }
})

// 创建菜单
Mock.mock('/menu/create', 'post', () => {
  return {
    code: 0,
    data: {},
    msg: 'success'
  }
})

// 编辑菜单
Mock.mock('/menu/edit', 'post', () => {
  return {
    code: 0,
    data: {},
    msg: 'success'
  }
})

// 删除菜单
Mock.mock('/menu/delete', 'post', () => {
  return {
    code: 0,
    data: {},
    msg: 'success'
  }
})
