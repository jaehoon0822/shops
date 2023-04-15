import { yupResolver } from '@hookform/resolvers/yup'
import { signUpSchema } from '../../../../commons/validation/signUp.yup'

const UseSignUp = () => {
  const signUpResolver = yupResolver(signUpSchema)
  const onSubmitSignUp = () => {}
  const inputInfo = [
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
  ]
  return { inputInfo, signUpResolver, onSubmitSignUp }
}

export default UseSignUp
