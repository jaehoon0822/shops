import { yupResolver } from '@hookform/resolvers/yup'
import { useSetRecoilState } from 'recoil'
import { SignInSchema } from '../../../../commons/validation/SignIn.yup'
import UseMutationLoginUser from '../mutation/UseMutationLoginUser'
import { IMutationLoginUserArgs } from '../../../../commons/types/generated/types'
import { accessTokenState } from '../../../../commons/stores'

const UseSignIn = () => {
  const signInResolver = yupResolver(SignInSchema)
  const { loginUser } = UseMutationLoginUser()
  const setAccessToken = useSetRecoilState(accessTokenState)

  const InputInfo = [
    {
      label: '아이디',
      name: 'email',
      placeholder: '이메일 아이디를 @까지 정확하게 입력하세요.',
    },
    {
      label: '비밀번호',
      name: 'password',
      placeholder: '영문+숫자 조합 8~16자리를 입력해주세요.',
    },
  ]

  const onSubmitSignIn = async (data: IMutationLoginUserArgs) => {
    try {
      const { data: tokenData } = await loginUser({
        variables: {
          ...data,
        },
      })

      console.log(data)
      setAccessToken(tokenData?.loginUser.accessToken ?? '')
    } catch (err) {
      if (err instanceof Error) {
        console.log(err)
      }
    }
  }

  return {
    signInResolver,
    onSubmitSignIn,
    InputInfo,
  }
}

export default UseSignIn