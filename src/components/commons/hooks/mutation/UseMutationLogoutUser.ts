import { gql, useMutation } from '@apollo/client'
import { IMutation } from '../../../../commons/types/generated/types'

const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`

const UseMutationLogoutUser = () => {
  const [logoutUser, { client }] = useMutation<Pick<IMutation, 'logoutUser'>>(
    LOGOUT_USER,
    {
      fetchPolicy: 'network-only',
    },
  )
  return {
    logoutUser,
    client,
  }
}

export default UseMutationLogoutUser
