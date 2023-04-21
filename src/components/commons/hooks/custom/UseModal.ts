import { useState } from 'react'

const UseModal = () => {
  const [isActive, setIsActive] = useState<boolean>(false)

  const onToogleActive = () => {
    setIsActive((prev) => !prev)
  }

  return { isActive, onToogleActive }
}

export default UseModal
