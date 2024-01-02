import { ProComponents } from '@/types/api'

export type CityMapItem = {
  value: string
  label: string
  garParentId?: string
  parentId?: string
  children?: CityMapItem[]
}

export type CityMapType = {
  [K: string]: CityMapItem
}

export type OriginCityData = {
  code: string
  value: string
  children?: ProComponents.CityItem[]
}

export type TransFormCityDataFn = (list: ProComponents.CityItem[]) => { cityMap: CityMapType; cityList: CityMapItem[] }

export type ProvinceType = {
  labelText: string
  key: 'province'
}

export type CityType = {
  labelText: string
  key: 'city'
}

export type AreaType = {
  labelText: string
  key: 'area'
}

type InitSelectProps = {
  mode: string
  allowClear: boolean
  placeholde: string
}

export type InitValueType = {
  province: ProvinceType & InitSelectProps
  city: CityType & InitSelectProps
  area: AreaType & InitSelectProps
}

export type CitySelectProps = {
  value: {
    province: string[]
    city: string[]
    area: string[]
  }
  onChange: (V: CitySelectProps['value']) => void
}
