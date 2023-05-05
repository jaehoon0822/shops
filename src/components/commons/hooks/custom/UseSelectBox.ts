import { useState } from 'react'
import UseToggle from './UseToggle'

const UseSelectBox = (defaultValue: string) => {
  const [val, setVal] = useState(defaultValue)
  const onClickSelectVal = (selectedVal: string) => {
    setVal(selectedVal)
  }
  const { isActive, onClickToggle } = UseToggle()
  return { isActive, onClickToggle, val, onClickSelectVal }
}

export default UseSelectBox
