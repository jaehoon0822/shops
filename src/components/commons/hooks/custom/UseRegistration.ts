import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useMemo, useState } from 'react'
import getTags from '../../../../commons/libraries/getTags'
import { registrationSchema } from '../../../../commons/validation/registration.yup'
import UseMutationCreateUseditem from '../mutation/UseMutationCreateUseditem'
import { ICreateUseditemInput } from '../../../../commons/types/generated/types'

const UseRegistration = () => {
  const [isBrowser, setIsBrowser] = useState(false)
  const { createUseditem } = UseMutationCreateUseditem()

  const resolver = yupResolver(registrationSchema)
  const inputsInfo = useMemo(
    () => [
      { label: '상품명', placeholder: '상품명을 작성해주세요', name: 'name' },
      {
        label: '상품요약',
        placeholder: '상품요약을 작성해주세요.',
        type: 'text',
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
        type: 'number',
        name: 'price',
      },
      {
        label: '태그입력',
        placeholder: '#태그 #태그 #태그',
        type: 'text',
        name: 'tags',
      },
      {
        label: '브랜드 위치',
        name: 'useditemAddress',
        lat: '',
        lng: '',
        inputs: [
          {
            name: 'useditemAddress.zipcode',
            type: 'text',
            placeholder: '07250',
          },
          {
            name: 'useditemAddress.address',
            type: 'text',
            placeholder: '',
          },
          {
            name: 'useditemAddress.addressDetail',
            type: 'text',
            placeholder: '',
          },
        ],
      },
      {
        label: '사진 첨부',
        placeholder: '',
        type: 'file',
        name: 'images',
      },
    ],
    [],
  )

  const onSubmitRegistration = async (
    data: Omit<ICreateUseditemInput, 'tags'> & { tags: string },
  ) => {
    const stringTags = data.tags ?? ''
    const tags = getTags(stringTags)
    const { data: useditemData } = await createUseditem({
      variables: {
        createUseditemInput: {
          ...data,
          tags,
        },
      },
    })
    console.log(useditemData)
  }
  useEffect(() => {
    setIsBrowser(true)
  }, [])

  return {
    inputsInfo,
    resolver,
    onSubmitRegistration,
    isBrowser,
    getTags,
  }
}

export default UseRegistration
