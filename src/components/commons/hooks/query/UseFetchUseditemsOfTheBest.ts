import { gql, useQuery } from '@apollo/client'
import { IQuery } from '../../../../commons/types/generated/types'

const FETCH_USEDITEMS_OF_THE_BEST = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      createdAt
      updatedAt
      deletedAt
    }
  }
`

const UseFetchUseditemsOfTheBest = () => {
  const { data } = useQuery<Pick<IQuery, 'fetchUseditemsOfTheBest'>>(
    FETCH_USEDITEMS_OF_THE_BEST,
  )
  return { data }
}

export default UseFetchUseditemsOfTheBest
