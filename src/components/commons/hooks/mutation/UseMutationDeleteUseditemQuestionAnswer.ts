import { gql, useMutation } from '@apollo/client'
import {
  IMutation,
  IMutationDeleteUseditemQuestionAnswerArgs,
} from '../../../../commons/types/generated/types'

export const DELETE_USEDITEM_QUESTION_ANSWER = gql`
  mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId: ID!) {
    deleteUseditemQuestionAnswer(
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    )
  }
`

const UseMutationDeleteUseditemQuestionAnswer = () => {
  const [deleteUseditemQuestionAnswer] = useMutation<
    Pick<IMutation, 'deleteUseditemQuestionAnswer'>,
    IMutationDeleteUseditemQuestionAnswerArgs
  >(DELETE_USEDITEM_QUESTION_ANSWER)

  return { deleteUseditemQuestionAnswer }
}

export default UseMutationDeleteUseditemQuestionAnswer
