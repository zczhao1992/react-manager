import { FC, useEffect } from 'react'
import { Form, Input } from 'antd'
import { useLowCodeStore } from '@/store/useLowCodeStore'

const { TextArea } = Input

const PageSetting: FC = () => {
  const { title, desc, js, css, resetPageInfo } = useLowCodeStore()

  const [form] = Form.useForm()

  // 实时更新表单内容
  useEffect(() => {
    form.setFieldsValue({ title, desc, js, css })
  }, [title, desc, js, css])

  function handleValuesChange() {
    resetPageInfo(form.getFieldsValue())
  }

  return (
    <Form form={form} layout='vertical' initialValues={{ title, desc, js, css }} onValuesChange={handleValuesChange}>
      <Form.Item label='问卷标题' name='title' rules={[{ required: true, message: '请输入标题' }]}>
        <Input placeholder='请输入标题' />
      </Form.Item>
      <Form.Item label='问卷描述' name='desc'>
        <TextArea placeholder='问卷描述...' />
      </Form.Item>
      <Form.Item label='样式代码' name='css'>
        <TextArea placeholder='输入 CSS 样式代码...' />
      </Form.Item>
      <Form.Item label='脚本代码' name='js'>
        <TextArea placeholder='输入 JS 脚本代码...' />
      </Form.Item>
    </Form>
  )
}

export default PageSetting
