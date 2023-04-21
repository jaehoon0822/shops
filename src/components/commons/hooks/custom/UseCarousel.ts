import { useState } from 'react'

const UseCarousel = () => {
  const [idx, setIdx] = useState(0)
  const [clearInter, setClearInter] = useState<null | NodeJS.Timer>(null)

  const onClickDot = (currentIdx: number) => () => {
    setIdx(currentIdx)
  }

  return { idx, setIdx, clearInter, setClearInter, onClickDot }
}

export default UseCarousel
