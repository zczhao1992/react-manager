import { useEffect, useState } from 'react'
import { Select } from 'antd'
import useCityData from './useCityData'

const cityLabelMap: any = {
  '0': {
    labelText: '省',
    key: 'province'
  },
  '1': {
    labelText: '市',
    key: 'city'
  },
  '2': {
    labelText: '区',
    key: 'area'
  }
}

type CitySelectProp = {
  value: any
  onChange: (p: any) => void
}

function CitySelect(props: CitySelectProp) {
  const { value, onChange } = props
  const { cityList, cityMap } = useCityData()

  const selectProps = {
    mode: 'multiple',
    allowClear: true,
    placeholde: 'Please select'
  }

  const [selectData, setSelectData] = useState<any>()
  const [selectOptions, setSelectOptions] = useState<any>({
    '0': [],
    '1': [],
    '2': []
  })

  // 清理下拉框
  const clearOptions = (index: number) => {
    if (index === 0) {
      setSelectData({
        province: [],
        city: [],
        area: []
      })
      setSelectOptions({
        ...selectOptions,
        '1': [],
        '2': []
      })
    }
    if (index === 1) {
      setSelectData({
        ...selectData,
        city: [],
        area: []
      })
      setSelectOptions({
        ...selectOptions,
        '2': []
      })
    }
    if (index === 2) {
      setSelectData({
        ...selectData,
        area: []
      })
    }
  }

  const onSelectChange = (val: any, index: number) => {
    if (index != 2) {
      let nextList = val.reduce((pre: any, cur: any) => {
        pre.push(...cityMap[cur].children)
        return pre
      }, [])

      setSelectOptions({
        ...selectOptions,
        [index + 1]: nextList
      })
    }

    if (val.length === 0) {
      clearOptions(index)
    } else {
      setSelectData({
        ...selectData,
        [cityLabelMap[index].key]: val
      })
    }

    onChange &&
      onChange({
        ...selectData,
        [cityLabelMap[index].key]: val
      })
  }

  const onOptionsChange = (value: any) => {
    const getChildrenList = (arr: any) => {
      return arr.reduce((pre: any, cur: any) => {
        pre.push(...cityMap[cur].children)
        return pre
      }, [])
    }
    setSelectOptions({
      '0': cityList,
      '1': getChildrenList(value.province),
      '2': getChildrenList(value.city)
    })
  }

  useEffect(() => {
    if (value && Object.keys(value).length > 0) {
      setSelectData(value)
    }
  }, [])

  useEffect(() => {
    if (cityList && cityList.length > 0) {
      onOptionsChange(value)
    }
  }, [cityList])

  return (
    <div>
      {new Array(3).fill(selectProps).map((item, index) => {
        return (
          <span key={index}>
            <span>{cityLabelMap[index].labelText}</span>
            <Select
              {...item}
              value={selectData ? selectData[cityLabelMap[index].key] : []}
              onChange={val => onSelectChange(val, index)}
              style={{ width: '130px', marginRight: '10px' }}
              options={selectOptions[index] || cityList}
            />
          </span>
        )
      })}
    </div>
  )
}

export default CitySelect
