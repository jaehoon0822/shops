import { gql, useQuery } from '@apollo/client'
import { IQuery } from '../../../../commons/types/generated/types'

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      picture
      userPoint {
        _id
        amount
        createdAt
        updatedAt
        deletedAt
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`

const UseFetchUserLoggedIn = () => {
  const { data } =
    useQuery<Pick<IQuery, 'fetchUserLoggedIn'>>(FETCH_USER_LOGGED_IN)
  return { data }
}

export default UseFetchUserLoggedIn
