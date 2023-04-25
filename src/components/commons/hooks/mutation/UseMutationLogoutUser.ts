import { gql, useMutation } from '@apollo/client'
import { IMutation } from '../../../../commons/types/generated/types'

const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`

const UseMutationLogoutUser = () => {
  const [logoutUser] = useMutation<Pick<IMutation, 'logoutUser'>>(LOGOUT_USER)
  return {
    logoutUser,
  }
}

export default UseMutationLogoutUser
