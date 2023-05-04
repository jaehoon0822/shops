import React, { useState } from 'react'

const UseToggle = () => {
  const [isActive, setIsActive] = useState(false)
  const onClickToggle = () => {
    setIsActive((prev) => !prev)
  }
  return {
    isActive,
    onClickToggle,
  }
}

export default UseToggle
