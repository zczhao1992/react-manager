export const getCityDataMap = (list: any) => {
  const cityMap: any = {}

  const cityList = list.reduce((pre: any, cur: any) => {
    const children = (cur.children || []).reduce((chPre: any, chCur: any) => {
      const childList = (chCur.children || []).reduce((garPre: any, garCur: any) => {
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
