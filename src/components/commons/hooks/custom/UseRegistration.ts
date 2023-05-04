import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useMemo, useState } from 'react'
import getTags from '../../../../commons/libraries/getTags'
import { registrationSchema } from '../../../../commons/validation/registration.yup'
import UseMutationCreateUseditem from '../mutation/UseMutationCreateUseditem'
import { ICreateUseditemInput } from '../../../../commons/types/generated/types'
import UseRoute from './UseRoute'
import { FETCH_USEDITEMS } from '../query/UseFetchUseditems'
import UseMutationUpdateUseditem from '../mutation/UseMutationUpdateUseditem'
import { FETCH_USEDITEM } from '../query/UseFetchUseditem'

const UseRegistration = (useditemId?: string) => {
  const { push, back } = UseRoute()
  const [isBrowser, setIsBrowser] = useState(false)
  const { createUseditem } = UseMutationCreateUseditem()
  const { updateUseditem } = UseMutationUpdateUseditem()
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

  const onSubmitRegistration = (
    data: Omit<ICreateUseditemInput, 'tags'> & { tags: string },
  ) => {
    const stringTags = data.tags ?? ''
    const tags = getTags(stringTags)
    void createUseditem({
      variables: {
        createUseditemInput: {
          ...data,
          tags,
        },
      },
      awaitRefetchQueries: true,
      refetchQueries: [
        {
          query: FETCH_USEDITEMS,
          variables: {
            page: 1,
            search: '',
          },
        },
      ],
    })
    push('/Brand/Main')
  }

  const onSubmitEdit = (
    data: Omit<ICreateUseditemInput, 'tags'> & { tags: string },
  ) => {
    const stringTags = data.tags ?? ''
    const tags = getTags(stringTags)
    if (useditemId) {
      void updateUseditem({
        variables: {
          useditemId,
          updateUseditemInput: {
            ...data,
            tags,
          },
        },
        awaitRefetchQueries: true,
        refetchQueries: [
          {
            query: FETCH_USEDITEMS,
            variables: {
              page: 1,
              search: '',
            },
          },
          {
            query: FETCH_USEDITEM,
            variables: {
              useditemId,
            },
          },
        ],
      })
    }
    back()
  }

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  return {
    inputsInfo,
    resolver,
    onSubmitRegistration,
    onSubmitEdit,
    isBrowser,
    getTags,
  }
}

export default UseRegistration
