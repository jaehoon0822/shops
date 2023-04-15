import * as yup from 'yup'
const regexPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]/
const regexSpacing = /^[^\s]+$/

export const SignInSchema = yup.object({
  email: yup
    .string()
    .email('이메일 형태로 입력해주세요.')
    .required('이메일을 입력해 주세요.'),
  password: yup
    .string()
    .required('패스워드를 입력해주어야 합니다.')
    .max(12, '12자이하로 입력해주세요.')
    .min(6, '6자 이상 입력해주세요.')
    .matches(
      regexPassword,
      '영문(대소문자), 숫자, 기호가 최소 1글자가 입력되어야 합니다.',
    )
    .matches(regexSpacing, '띄어쓰기가 입력되었습니다.'),
})
