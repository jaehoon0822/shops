import { gql, useMutation } from '@apollo/client'
import {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
} from '../../../../commons/types/generated/types'

const DELETE_USEDITEM_QUESTION = gql`
  mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
  }
`

const UseMutationDeleteUseditemQuestion = () => {
  const [deleteUseditemQuestion] = useMutation<
    Pick<IMutation, 'deleteUseditemQuestion'>,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_USEDITEM_QUESTION)

  return { deleteUseditemQuestion }
}

export default UseMutationDeleteUseditemQuestion
