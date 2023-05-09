import { gql, useQuery } from '@apollo/client'
import {
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
} from '../../../../commons/types/generated/types'

const FETCH_USEDITEMS_I_PICKED = gql`
  query fetchUseditemsIPicked($search: String, $page: Int) {
    fetchUseditemsIPicked(search: $search, page: $page) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      seller {
        _id
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`

const UseFetchUseditemsIPicked = () => {
  const { data } = useQuery<
    Pick<IQuery, 'fetchUseditemsIPicked'>,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_USEDITEMS_I_PICKED)

  return { data }
}

export default UseFetchUseditemsIPicked
