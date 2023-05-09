import { gql, useQuery } from '@apollo/client'
import {
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from '../../../../commons/types/generated/types'

export const FETCH_USEDITEM_QUESTION_ANSWERS = gql`
  query fetchUseditemQuestionAnswers($page: Int, $useditemQuestionId: ID!) {
    fetchUseditemQuestionAnswers(
      page: $page
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
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

const UseFetchUseditemQuestonAnswers = (questionId: string) => {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, 'fetchUseditemQuestionAnswers'>,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USEDITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: questionId,
    },
  })

  return { data, fetchMore }
}

export default UseFetchUseditemQuestonAnswers
