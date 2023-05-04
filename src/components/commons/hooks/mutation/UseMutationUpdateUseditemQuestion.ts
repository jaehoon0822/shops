import { gql, useMutation } from '@apollo/client'
import {
  IMutation,
  IMutationUpdateUseditemQuestionArgs,
} from '../../../../commons/types/generated/types'

export const UPDATE_USEDITEM_QUESTION = gql`
  mutation updateUseditemQuestion(
    $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
    $useditemQuestionId: ID!
  ) {
    updateUseditemQuestion(
      updateUseditemQuestionInput: $updateUseditemQuestionInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
      useditem {
        _id
      }
      user {
        _id
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`

const UseMutationUpdateUseditemQuestion = () => {
  const [updateUseditemQuestion] = useMutation<
    Pick<IMutation, 'updateUseditemQuestion'>,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_USEDITEM_QUESTION)
  return { updateUseditemQuestion }
}

export default UseMutationUpdateUseditemQuestion
