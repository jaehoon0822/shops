import { useQuery, gql } from '@apollo/client'
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from '../../../../commons/types/generated/types'

export const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        _id
        zipcode
        address
        addressDetail
        lat
        lng
      }
      buyer {
        _id
        email
        name
        picture
        userPoint {
          _id
        }
      }
      seller {
        _id
        email
        name
        picture
        userPoint {
          _id
        }
      }
      soldAt
    }
  }
`

const UseFetchUseditem = (useditemId: string) => {
  const { data } = useQuery<
    Pick<IQuery, 'fetchUseditem'>,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, {
    variables: {
      useditemId,
    },
  })
  return { data }
}

export default UseFetchUseditem
