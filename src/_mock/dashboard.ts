import Mock from 'mockjs'

// 获取折线图
Mock.mock('/order/dashboard/getLineData', 'get', () => {
  return {
    code: 0,
    data: {
      label: ['12月', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月'],
      order: [958, 715, 487, 332, 796, 829, 576, 294, 153, 717, 129, 877],
      money: [375, 630, 569, 37, 152, 885, 838, 490, 913, 544, 572, 873]
    },
    msg: 'success'
  }
})

// 获取饼图1数据
Mock.mock('/order/dashboard/getPieCityData', 'get', () => {
  return {
    code: 0,
    data: [
      {
        value: 359,
        name: '北京'
      },
      {
        value: 228,
        name: '上海'
      },
      {
        value: 849,
        name: '深圳'
      },
      {
        value: 110,
        name: '广州'
      },
      {
        value: 676,
        name: '杭州'
      },
      {
        value: 999,
        name: '武汉'
      }
    ],
    msg: 'success'
  }
})

// 获取饼图2数据
Mock.mock('/order/dashboard/getPieAgeData', 'get', () => {
  return {
    code: 0,
    data: [
      {
        value: 74,
        name: '北京'
      },
      {
        value: 639,
        name: '上海'
      },
      {
        value: 255,
        name: '深圳'
      },
      {
        value: 727,
        name: '广州'
      },
      {
        value: 960,
        name: '杭州'
      },
      {
        value: 603,
        name: '武汉'
      }
    ],
    msg: 'success'
  }
})

// 获取雷达图数据
Mock.mock('/order/dashboard/getRadarData', 'get', () => {
  return {
    code: 0,
    data: {
      indicator: [
        {
          name: '服务态度',
          max: 10
        },
        {
          name: '在线时长',
          max: 600
        },
        {
          name: '接单率',
          max: 100
        },
        {
          name: '评分',
          max: 5
        },
        {
          name: '关注度',
          max: 10000
        }
      ],
      data: [
        {
          value: [8, 300, 80, 4, 9000],
          name: '模型诊断'
        }
      ]
    },
    msg: 'success'
  }
})

// 获取工作台汇总数据
Mock.mock('/order/dashboard/getReportData', 'get', () => {
  return {
    code: 0,
    data: {
      driverCount: 278600,
      totalMoney: 3984200,
      orderCount: 1306000,
      cityNum: 80
    },
    msg: 'success'
  }
})
