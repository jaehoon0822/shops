import { gql, useMutation } from '@apollo/client'
import {
  IMutation,
  IMutationCreateUseditemArgs,
} from '../../../../commons/types/generated/types'

const CREATE_USEDITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
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
const UseMutationCreateUseditem = () => {
  const [createUseditem] = useMutation<
    Pick<IMutation, 'createUseditem'>,
    IMutationCreateUseditemArgs
  >(CREATE_USEDITEM)

  return {
    createUseditem,
  }
}

export default UseMutationCreateUseditem
