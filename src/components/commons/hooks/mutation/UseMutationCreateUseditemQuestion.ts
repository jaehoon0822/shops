import { gql, useMutation } from '@apollo/client'
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
} from '../../../../commons/types/generated/types'

export const CREATE_USEDITEM_QUESTION = gql`
  mutation createUseditemQuestion(
    $createUseditemQuestionInput: CreateUseditemQuestionInput!
    $useditemId: ID!
  ) {
    createUseditemQuestion(
      createUseditemQuestionInput: $createUseditemQuestionInput
      useditemId: $useditemId
    ) {
      _id
      contents
      user {
        _id
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`

const UseMutationCreateUseditemQuestion = () => {
  const [createUseditemQuestion] = useMutation<
    Pick<IMutation, 'createUseditemQuestion'>,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USEDITEM_QUESTION)
  return {
    createUseditemQuestion,
  }
}

export default UseMutationCreateUseditemQuestion
