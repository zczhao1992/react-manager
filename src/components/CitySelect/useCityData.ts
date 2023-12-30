import { useEffect, useState } from 'react'
import api from '@/api/proComponentsApi'
import { getCityDataMap } from './utils'

function useCityData() {
  const [cityList, setCityList] = useState<any>([])
  const [cityMap, setCityMap] = useState<any>({})

  const getCityList = async () => {
    const cityData = await api.getCityList()
    const { cityMap, cityList } = getCityDataMap(cityData)
    setCityMap(cityMap)
    setCityList(cityList)
  }

  useEffect(() => {
    getCityList()
  }, [])

  return {
    cityList,
    cityMap
  }
}

export default useCityData
