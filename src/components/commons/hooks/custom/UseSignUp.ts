import { useCallback, useMemo, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { signUpSchema } from '../../../../commons/validation/signUp.yup'
import { ICreateUserInput } from '../../../../commons/types/generated/types'
import UseMutationCreateuser from '../mutation/UseMutationCreateuser'
import UseRoute from './UseRoute'
import UseModal from './UseModal'

const UseSignUp = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const { isActive, onToogleActive } = UseModal()
  const { createUser } = UseMutationCreateuser()
  const { push } = UseRoute()
  const signUpResolver = yupResolver(signUpSchema)

  const onSubmitSignUp = useCallback(
    async (data: ICreateUserInput) => {
      try {
        await createUser({
          variables: {
            createUserInput: {
              name: data.name,
              email: data.email,
              password: data.password,
            },
          },
        })
        push('/signIn')
      } catch (err) {
        onToogleActive()
        if (err instanceof Error) {
          setErrorMessage(err.message)
        }
      }
    },
    [push, onToogleActive, setErrorMessage, createUser],
  )

  const inputInfo = useMemo(
    () => [
      {
        label: '아이디',
        type: 'email',
        name: 'email',
        placeholder: '이메일 아이디를 @까지 정확하게 입력하세요',
      },
      {
        label: '비밀번호',
        type: 'password',
        name: 'password',
        placeholder: '영문+숫자 조합 8~16자리를 입력해주세요.',
      },
      {
        label: '비밀번호 확인',
        type: 'password',
        name: 'CheckPassword',
        placeholder: '이메일 아이디를 @까지 정확하게 입력하세요',
      },
      {
        label: '이름',
        type: 'text',
        name: 'name',
        placeholder: 'ex) 홍길동',
      },
    ],
    [],
  )
  return {
    inputInfo,
    signUpResolver,
    onSubmitSignUp,
    errorMessage,
    isActive,
    onToogleActive,
  }
}

export default UseSignUp
