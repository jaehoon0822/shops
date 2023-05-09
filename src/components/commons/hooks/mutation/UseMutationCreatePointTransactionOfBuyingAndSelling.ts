import { gql, useMutation } from '@apollo/client'
import {
  IMutation,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
} from '../../../../commons/types/generated/types'

export const CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING = gql`
  mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
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
      }
      soldAt
      createdAt
      updatedAt
      deletedAt
    }
  }
`

const UseMutationCreatePointTransactionOfBuyingAndSelling = () => {
  const [createPointTransactionOfBuyingAndSelling] = useMutation<
    Pick<IMutation, 'createPointTransactionOfBuyingAndSelling'>,
    IMutationCreatePointTransactionOfBuyingAndSellingArgs
  >(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING)

  return { createPointTransactionOfBuyingAndSelling }
}

export default UseMutationCreatePointTransactionOfBuyingAndSelling
