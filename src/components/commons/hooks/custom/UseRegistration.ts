import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react'
import getTags from '../../../../commons/libraries/getTags'
import { registrationSchema } from '../../../../commons/validation/registration.yup'

const UseRegistration = () => {
  const [isBrowser, setIsBrowser] = useState(false)
  const resolver = yupResolver(registrationSchema)
  const inputsInfo = [
    { label: '상품명', placeholder: '상품명을 작성해주세요', name: 'name' },
    {
      label: '상품요약',
      placeholder: '상품요약을 작성해주세요.',
      name: 'remarks',
    },
    {
      label: '상품내용',
      placeholder: '상품을 설명해주세요.',
      name: 'contents',
    },
    {
      label: '판매가격',
      placeholder: '판매가격을 입력해주세요.',
      name: 'price',
    },
    {
      label: '태그입력',
      placeholder: '#태그 #태그 #태그',
      name: 'tags',
    },
    {
      label: '브랜드 위치',
      name: 'useditemAddress',
      lat: '',
      lng: '',
      inputs: [
        {
          name: 'zipcode',
          placeholder: '07250',
        },
        {
          name: 'address',
          placeholder: '',
        },
        {
          name: 'addressDetail',
          placeholder: '',
        },
      ],
    },
  ]
  const onSubmitRegistration = (data: any) => {
    console.log(data)
    console.log(getTags(data.tags))
  }

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  return { inputsInfo, resolver, onSubmitRegistration, isBrowser, getTags }
}

export default UseRegistration
