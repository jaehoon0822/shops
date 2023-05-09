import { gql, useMutation } from '@apollo/client'
import {
  IMutation,
  IMutationUpdateUseditemQuestionAnswerArgs,
} from '../../../../commons/types/generated/types'

const UPDATE_USEDITEM_QUESTION_ANSWER = gql`
  mutation updateUseditemQuestionAnswer(
    $updateUseditemQuestionAnswerInput: UpdateUseditemQuestionAnswerInput!
    $useditemQuestionAnswerId: ID!
  ) {
    updateUseditemQuestionAnswer(
      updateUseditemQuestionAnswerInput: $updateUseditemQuestionAnswerInput
      useditemQuestionAnswerId: $useditemQuestionAnswerId
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

const UseMutationUpdateUseditemQuestionAnswer = () => {
  const [updateUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, 'updateUseditemQuestionAnswer'>,
    IMutationUpdateUseditemQuestionAnswerArgs
  >(UPDATE_USEDITEM_QUESTION_ANSWER)

  return { updateUseditemQuestionAnswer }
}

export default UseMutationUpdateUseditemQuestionAnswer
