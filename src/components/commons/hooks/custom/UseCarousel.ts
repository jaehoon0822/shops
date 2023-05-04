import { useState } from 'react'

const UseCarousel = () => {
  const [idx, setIdx] = useState(0)

  const onClickDot = (currentIdx: number) => () => {
    setIdx(currentIdx)
  }

  return { idx, setIdx, onClickDot }
}

export default UseCarousel
