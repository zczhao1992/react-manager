import { useStore } from '@/store'
import { formatDate, formatNum, formatMoney, formatState } from '@/utils'
import { Descriptions, Card, Button } from 'antd'
import * as echarts from 'echarts'
import { useEffect, useState } from 'react'
import api from '@/api'
import { Dashboard } from '@/types/api'
import { useCharts } from '@/hook/useCharts'
import userImg from '@/assets/images/avatar.png'
import styles from './index.module.less'

export default function DashBoard() {
  const userInfo = useStore(state => state.userInfo)
  const [report, setReport] = useState<Dashboard.ReportData>()

  // 初始化折线图
  const [lineRef, lineChart] = useCharts()
  // 初始饼图
  const [pieRef1, pieChart1] = useCharts()
  const [pieRef2, pieChart2] = useCharts()
  // 初始化雷达图
  const [radarRef, radarChart] = useCharts()
  useEffect(() => {
    renderLineChart()
    renderPieChart1()
    renderPieChart2()
    renderRadarChart()
  }, [lineChart, pieChart1, pieChart2, radarChart])

  // 加载折线图数据
  const renderLineChart = async () => {
    if (!lineChart) return
    // const data = await api.getLineData()

    const data = {
      label: ['12月', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月'],
      order: [958, 715, 487, 332, 796, 829, 576, 294, 153, 717, 129, 877],
      money: [375, 630, 569, 37, 152, 885, 838, 490, 913, 544, 572, 873]
    }
    lineChart?.setOption({
      // title: {
      //   text: '订单和流水走势图'
      // },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['订单', '流水']
      },
      grid: {
        left: 50,
        right: 50,
        bottom: 20
      },
      xAxis: {
        data: data.label
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '订单',
          type: 'line',
          data: data.order
        },
        {
          name: '流水',
          type: 'line',
          data: data.money
        }
      ]
    })
  }

  // 加载饼图1
  const renderPieChart1 = async () => {
    if (!pieChart1) return
    // const data = await api.getPieCityData()

    const data = [
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
    ]

    pieChart1?.setOption({
      title: {
        text: '司机城市分布',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: '城市分布',
          type: 'pie',
          radius: '50%',
          data
        }
      ]
    })
  }

  // 加载饼图2
  const renderPieChart2 = async () => {
    if (!pieChart2) return
    // const data = await api.getPieAgeData()

    const data = [
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
    ]

    pieChart2?.setOption({
      title: {
        text: '司机年龄分布',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: '年龄分布',
          type: 'pie',
          radius: [50, 180],
          roseType: 'area',
          data
        }
      ]
    })
  }

  // 加载雷达图
  const renderRadarChart = async () => {
    if (!radarChart) return
    // const data = await api.getRadarData()
    const data = {
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
          name: '司机模型诊断'
        }
      ]
    }

    radarChart?.setOption({
      // title: {
      //   text: '司机模型诊断',
      //   left: 'center'
      // },
      legend: {
        data: ['司机模型诊断']
      },
      radar: {
        indicator: data.indicator
      },
      series: [
        {
          name: '模型诊断',
          type: 'radar',
          data: data.data
        }
      ]
    })
  }

  // 刷新饼图
  const handleRefresh = () => {
    renderPieChart1()
    renderPieChart2()
  }

  useEffect(() => {
    getReportData()
  }, [])

  const getReportData = async () => {
    // const data = await api.getReportData()
    const data = {
      driverCount: 278600,
      totalMoney: 3984200,
      orderCount: 1306000,
      cityNum: 80
    }
    setReport(data)
  }
  return (
    <div className={styles.dashboard}>
      <div className={styles.userInfo}>
        <img src={userImg} className={styles.userImg} />
        <Descriptions title='欢迎新同学，每天都要开心！'>
          <Descriptions.Item label='用户ID'>{userInfo.userId}</Descriptions.Item>
          <Descriptions.Item label='邮箱'>{userInfo.userEmail}</Descriptions.Item>
          <Descriptions.Item label='状态'>{formatState(userInfo.state)}</Descriptions.Item>
          <Descriptions.Item label='手机号'>{userInfo.mobile}</Descriptions.Item>
          <Descriptions.Item label='岗位'>{userInfo.job}</Descriptions.Item>
          <Descriptions.Item label='部门'>{userInfo.deptName}</Descriptions.Item>
        </Descriptions>
      </div>
      <div className={styles.report}>
        <div className={styles.card}>
          <div className='title'>司机数量</div>
          <div className={styles.data}>{formatNum(report?.driverCount)}个</div>
        </div>
        <div className={styles.card}>
          <div className='title'>总流水</div>
          <div className={styles.data}>{formatMoney(report?.totalMoney)}元</div>
        </div>
        <div className={styles.card}>
          <div className='title'>总订单</div>
          <div className={styles.data}>{formatNum(report?.orderCount)}单</div>
        </div>
        <div className={styles.card}>
          <div className='title'>开通城市</div>
          <div className={styles.data}>{formatNum(report?.cityNum)}座</div>
        </div>
      </div>
      <div className={styles.chart}>
        <Card
          title='订单和流水走势图'
          extra={
            <Button type='primary' onClick={renderLineChart}>
              刷新
            </Button>
          }
        >
          <div ref={lineRef} className={styles.itemChart}></div>
        </Card>
      </div>
      <div className={styles.chart}>
        <Card
          title='司机分布'
          extra={
            <Button type='primary' onClick={handleRefresh}>
              刷新
            </Button>
          }
        >
          <div className={styles.pieChart}>
            <div ref={pieRef1} className={styles.itemPie}></div>
            <div ref={pieRef2} className={styles.itemPie}></div>
          </div>
        </Card>
      </div>
      <div className={styles.chart}>
        <Card
          title='模型诊断'
          extra={
            <Button type='primary' onClick={renderRadarChart}>
              刷新
            </Button>
          }
        >
          <div ref={radarRef} className={styles.itemChart}></div>
        </Card>
      </div>
    </div>
  )
}
