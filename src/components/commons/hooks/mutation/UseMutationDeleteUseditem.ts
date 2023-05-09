import { gql, useMutation } from '@apollo/client'
import {
  IMutation,
  IMutationDeleteUseditemArgs,
} from '../../../../commons/types/generated/types'

const DELETE_USEDITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`

const UseMutationDeleteUseditem = () => {
  const [deleteUseditem] = useMutation<
    Pick<IMutation, 'deleteUseditem'>,
    IMutationDeleteUseditemArgs
  >(DELETE_USEDITEM)
  return { deleteUseditem }
}

export default UseMutationDeleteUseditem
