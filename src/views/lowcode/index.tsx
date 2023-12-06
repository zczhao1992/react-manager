import { useState, useEffect, useRef, useMemo } from 'react'
import { Button } from 'antd'

export default function LowCode() {
  const [num, setNum] = useState(0)

  const r = useRef(0)

  useEffect(() => {
    console.log('render', r)
    return () => {
      console.log('卸载')
    }
  }, [num])

  const aa = useMemo(() => {
    return <>{r.current}</>
  }, [r.current])

  return (
    <>
      {aa}
      <div>{num}</div>
      <Button
        onClick={() => {
          r.current = r.current + 1
          setNum(num + 1)
          console.log('location', location)
          // const params = new URLSearchParams(location.search)
          // setTimeout(() => {
          //   location.href = params.get('callback') || '/welcome'
          // })
        }}
      >
        ddd
      </Button>
    </>
  )
}
