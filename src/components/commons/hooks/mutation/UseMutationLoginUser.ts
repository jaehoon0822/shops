import { gql, useMutation } from '@apollo/client'
import {
  IMutation,
  IMutationLoginUserArgs,
} from '../../../../commons/types/generated/types'

export const LOGIN_USER = gql`
  mutation loginUser($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`

const UseMutationLoginUser = () => {
  const [loginUser] = useMutation<
    Pick<IMutation, 'loginUser'>,
    IMutationLoginUserArgs
  >(LOGIN_USER)

  return { loginUser }
}

export default UseMutationLoginUser
