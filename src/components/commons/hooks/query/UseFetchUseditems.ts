import { gql, useQuery } from '@apollo/client'
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from '../../../../commons/types/generated/types'

export const FETCH_USEDITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
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
    }
  }
`

const UseFetchUseditems = (
  page?: number,
  search?: string,
  isSoldout?: boolean,
) => {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, 'fetchUseditems'>,
    IQueryFetchUseditemsArgs
  >(FETCH_USEDITEMS, {
    variables: {
      page,
      isSoldout,
      search,
    },
  })
  return { data, fetchMore }
}

export default UseFetchUseditems
