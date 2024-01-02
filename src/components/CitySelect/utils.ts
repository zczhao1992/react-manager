import { CityMapType, OriginCityData, CityMapItem, TransFormCityDataFn, InitValueType } from './interface'
import { ProComponents } from '@/types/api'

export const getCityDataMap: TransFormCityDataFn = (list: ProComponents.CityItem[]) => {
  const cityMap: CityMapType = {}

  const cityList = list.reduce((pre: CityMapItem[], cur: OriginCityData) => {
    const children = (cur.children || []).reduce((chPre: CityMapItem[], chCur: OriginCityData) => {
      const childList = (chCur.children || []).reduce((garPre: CityMapItem[], garCur: OriginCityData) => {
        garPre.push({
          value: garCur.code,
          label: garCur.value
        })

        cityMap[garCur.code] = {
          value: garCur.code,
          label: garCur.value,
          garParentId: cur.code,
          parentId: chCur.code
        }

        return garPre
      }, [])

      cityMap[chCur.code] = {
        value: chCur.code,
        label: chCur.value,
        parentId: cur.code,
        children: childList
      }

      chPre.push({
        value: chCur.code,
        label: chCur.value,
        children: childList
      })

      return chPre
    }, [])

    cityMap[cur.code] = {
      value: cur.code,
      label: cur.value,
      children
    }

    pre.push({
      value: cur.code,
      label: cur.value,
      children
    })

    return pre
  }, [])

  return { cityMap, cityList }
}

export const InitValue: InitValueType = {
  province: {
    labelText: '省',
    key: 'province',
    mode: 'multiple',
    allowClear: true,
    placeholde: 'Please select'
  },
  city: {
    labelText: '市',
    key: 'city',
    mode: 'multiple',
    allowClear: true,
    placeholde: 'Please select'
  },
  area: {
    labelText: '区',
    key: 'area',
    mode: 'multiple',
    allowClear: true,
    placeholde: 'Please select'
  }
}
