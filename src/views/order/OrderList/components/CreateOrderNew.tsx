import { IModalProp } from '@/types/modal'
import { Col, Form, Input, Modal, Row, Select, DatePicker } from 'antd'
import { useEffect, useImperativeHandle, useState } from 'react'
import api from '@/api/orderApi'
import { Order } from '@/types/api'
import { message } from '@/utils/AntdGlobal'
import FormRender, { useForm } from 'form-render'
export default function CreateOrder(props: IModalProp) {
  const [visible, setVisible] = useState(false)
  const form = useForm()

  // 初始化城市列表、车型列表
  const getInitData = async () => {
    const cityList = await api.getCityList()
    const vehicleList = await api.getVehicleList()
    form.setSchema({
      cityName: {
        props: {
          options: cityList.map(item => ({ label: item.name, value: item.name }))
        }
      },
      vehicleName: {
        props: {
          options: vehicleList.map(item => ({ label: item.name, value: item.name }))
        }
      }
    })
  }
  useImperativeHandle(props.mRef, () => {
    return {
      open
    }
  })

  // 打开弹框
  const open = () => {
    setVisible(true)
  }

  // 创建订单提交
  const handleOk = async () => {
    const valid = await form.validateFields()
    if (valid) {
      await api.createOrder(form.getValues())
      message.success('创建成功')
      handleCancel()
      props.update()
    }
  }

  // 弹框关闭
  const handleCancel = () => {
    form.resetFields()
    setVisible(false)
  }
  const schema = {
    type: 'object',
    displayType: 'row',
    column: 2,
    labelWidth: 120,
    properties: {
      cityName: {
        title: '城市名称',
        type: 'string',
        widget: 'select',
        rules: [{ required: true, message: '请选择城市名称' }]
      },
      vehicleName: {
        title: '车型',
        type: 'string',
        widget: 'select',
        required: true
      },
      userName: {
        title: '用户名称',
        type: 'string',
        widget: 'input',
        required: true,
        placeholder: '请输入用户名称'
      },
      mobile: {
        title: '手机号',
        type: 'string',
        widget: 'inputNumber',
        placeholder: '请输入下单手机号',
        rules: [{ pattern: /^1[1-9]\d{9}$/, message: '请输入有效手机号码' }]
      },
      startAddress: {
        title: '起始地址',
        type: 'string',
        widget: 'input',
        placeholder: '请输入起始地址'
      },
      endAddress: {
        title: '结束地址',
        type: 'string',
        widget: 'input',
        placeholder: '请输入结束地址'
      },
      orderAmount: {
        title: '下单金额',
        type: 'number',
        widget: 'inputNumber',
        placeholder: '请输入下单金额'
      },
      userPayAmount: {
        title: '支付金额',
        type: 'number',
        widget: 'inputNumber',
        placeholder: '请输入支付金额'
      },
      driverName: {
        title: '司机名称',
        type: 'string',
        widget: 'input',
        placeholder: '请输入司机名称',
        required: true
      },
      driverAmount: {
        title: '司机金额',
        type: 'number',
        widget: 'inputNumber',
        placeholder: '请输入司机金额',
        required: true
      },
      payType: {
        title: '支付方式',
        type: 'number',
        widget: 'select',
        placeholder: '请选择支付方式',
        props: {
          options: [
            { label: '微信', value: 1 },
            { label: '支付宝', value: 2 }
          ]
        }
      },
      state: {
        title: '订单状态',
        type: 'number',
        widget: 'select',
        placeholder: '请选择订单状态',
        props: {
          options: [
            { label: '进行中', value: 1 },
            { label: '已完成', value: 2 },
            { label: '超时', value: 3 },
            { label: '取消', value: 4 }
          ]
        }
      },
      useTime: {
        title: '用车时间',
        type: 'string',
        widget: 'datePicker'
      },
      endTime: {
        title: '结束时间',
        type: 'string',
        widget: 'datePicker'
      }
    }
  }
  return (
    <Modal
      title='创建订单'
      width={800}
      open={visible}
      okText='确定'
      cancelText='取消'
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <FormRender form={form} schema={schema} onMount={getInitData} />
    </Modal>
  )
}
