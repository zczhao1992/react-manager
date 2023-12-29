import Mock from 'mockjs'

const Random = Mock.Random

function getLowCodeList() {
  const list = []
  for (let i = 0; i < 10; i++) {
    list.push({
      _id: Random.id(),
      title: Random.ctitle(),
      desc: Random.csentence(20, 30),
      imgSrc: Random.image('320x200', '#02adea', 'Hello, World'),
      isPublished: Random.boolean(),
      answerCount: Random.natural(50, 100),
      createdAt: Random.datetime()
    })
  }
  return list
}

function getComponentList() {
  return [
    // Info
    {
      fe_id: 'c1', // 注意，由于统计页，左侧和中间需要数据完全一直，所以要写死 fe_id ，不能用 Random.id()
      type: 'LowCodeInfo', // 组件类型，不能重复，前后端统一好
      title: '问卷信息',
      isHidden: false,
      isLocked: false,
      props: { title: '问卷标题', desc: '问卷描述...' }
    },
    // Title
    {
      fe_id: 'c2',
      type: 'LowCodeTitle', // 组件类型，不能重复，前后端统一好
      title: '标题',
      isHidden: false,
      isLocked: false,
      props: { text: '个人信息调研', level: 1, isCenter: false }
    },
    // Input
    {
      fe_id: 'c3',
      type: 'LowCodeInput',
      title: '输入框1',
      isHidden: false,
      isLocked: false,
      props: { title: '你的姓名', placeholder: '请输入姓名...' }
    },
    // Input
    {
      fe_id: 'c4',
      type: 'LowCodeInput',
      title: '输入框2',
      isHidden: false,
      isLocked: false,
      props: { title: '你的电话', placeholder: '请输入电话...' }
    },
    // Textarea
    {
      fe_id: 'c5',
      type: 'LowCodeTextarea',
      title: '多行输入',
      isHidden: false,
      isLocked: false,
      props: { title: '你的爱好', placeholder: '请输入...' }
    },
    // Paragraph
    {
      fe_id: 'c6',
      type: 'LowCodeParagraph',
      title: '段落',
      isHidden: false,
      isLocked: false,
      props: { text: '一行段落1\n一行段落2', isCenter: false }
    },
    // Radio
    {
      fe_id: 'c7',
      type: 'LowCodeRadio',
      title: '单选',
      isHidden: false,
      isLocked: false,
      props: {
        title: '单选标题',
        isVertical: false,
        options: [
          { value: 'item1', text: '选项1' },
          { value: 'item2', text: '选项2' },
          { value: 'item3', text: '选项3' }
        ],
        value: ''
      }
    },
    // Checkbox
    {
      fe_id: 'c8',
      type: 'LowCodeCheckbox',
      title: '多选',
      isHidden: false,
      isLocked: false,
      props: {
        title: '多选标题',
        isVertical: false,
        list: [
          { value: 'item1', text: '选项1', checked: true },
          { value: 'item2', text: '选项2', checked: false },
          { value: 'item3', text: '选项3', checked: false }
        ]
      }
    }
  ]
}

// 获取单个信息
Mock.mock(/\/lowcode\/item/, 'get', () => {
  return {
    code: 0,
    data: {
      id: Random.id(),
      title: Random.ctitle(),
      desc: '问卷描述',
      js: '',
      css: '',
      isDeleted: false,
      isPublished: true,
      componentList: getComponentList()
    },
    msg: 'success'
  }
})

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
Mock.mock(/\/lowcode\/list/, 'get', () => {
  return {
    code: 0,
    data: {
      page: {
        pageNum: 1,
        pageSize: 10,
        total: 10
      },
      list: getLowCodeList()
    },
    msg: 'success'
  }
})

// 更新
Mock.mock(/\/lowcode\/update/, 'post', () => {
  return {
    code: 0,
    data: {},
    msg: 'success'
  }
})
