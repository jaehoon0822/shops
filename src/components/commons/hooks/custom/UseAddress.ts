import { useState } from 'react'
import { Address } from 'react-daum-postcode'
import { useFormContext } from 'react-hook-form'

const UseAddress = () => {
  const { register, setValue } = useFormContext()
  const [isActive, setIsActive] = useState<boolean>(false)
  const onToggleActive = () => {
    setIsActive((prev) => !prev)
    document.body.style.removeProperty('overflow')
  }
  const onComplate = (data: Address) => {
    const { roadAddress, zonecode } = data
    setValue('useditemAddress.zipcode', zonecode)
    setValue('useditemAddress.address', roadAddress)
    document.body.style.removeProperty('overflow')
  }
  return { register, isActive, onToggleActive, onComplate }
}

export default UseAddress
