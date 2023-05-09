import { gql, useMutation } from '@apollo/client'
import {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
} from '../../../../commons/types/generated/types'

export const CREATE_USEDITEM_QUESTION_ANSWER = gql`
  mutation createUseditemQuestionAnswer(
    $createUseditemQuestionAnswerInput: CreateUseditemQuestionAnswerInput!
    $useditemQuestionId: ID!
  ) {
    createUseditemQuestionAnswer(
      createUseditemQuestionAnswerInput: $createUseditemQuestionAnswerInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
      useditemQuestion {
        _id
      }
      user {
        _id
        name
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`

const UseMutationCreateUseditemQuestionAnswer = () => {
  const [createUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, 'createUseditemQuestionAnswer'>,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_USEDITEM_QUESTION_ANSWER)

  return { createUseditemQuestionAnswer }
}

export default UseMutationCreateUseditemQuestionAnswer
