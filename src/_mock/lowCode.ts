import Mock from 'mockjs'

const Random = Mock.Random

function getQuestionList() {
  const list = []
  for (let i = 0; i < 10; i++) {
    list.push({
      _id: Random.id(),
      title: Random.ctitle(),
      isPublished: Random.boolean(),
      answerCount: Random.natural(50, 100),
      createdAt: Random.datetime()
    })
  }
  return list
}

// 创建
Mock.mock('/lowcode/create', 'post', () => {
  return {
    code: 0,
    data: {
      id: Random.id()
    },
    msg: 'success'
  }
})

// 获取列表
Mock.mock(/\/lowcode\/list/, 'get', opt => {
  console.log(opt)
  return {
    code: 0,
    data: {
      page: {
        pageNum: 1,
        pageSize: 10,
        total: 10
      },
      list: getQuestionList()
    },
    msg: 'success'
  }
})
