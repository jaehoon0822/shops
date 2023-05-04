import { gql, useQuery } from '@apollo/client'
import { useRecoilState } from 'recoil'
import {
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from '../../../../commons/types/generated/types'
import { pageState } from '../../../../commons/stores'

export const FETCH_USEDITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($useditemId: ID!, $page: Int) {
    fetchUseditemQuestions(page: $page, useditemId: $useditemId) {
      _id
      contents
      user {
        _id
        email
        name
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`

const UseFetchUseditemQuestions = (useditemId: string) => {
  const [page, setPage] = useRecoilState(pageState)
  const { data, fetchMore } = useQuery<
    Pick<IQuery, 'fetchUseditemQuestions'>,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USEDITEM_QUESTIONS, {
    variables: {
      useditemId,
    },
  })

  const onLoadMore = (): void => {
    if (!data) return
    void fetchMore({
      variables: {
        useditemId,
        page: page + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditemQuestions.length === 0) return prev
        const newQuestions = fetchMoreResult.fetchUseditemQuestions.filter(
          (question) =>
            !prev.fetchUseditemQuestions.some((q) => q._id === question._id),
        )
        setPage((prevPage) => prevPage + 1)
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...newQuestions,
          ],
        }
      },
    })
  }

  return { data: data?.fetchUseditemQuestions, onLoadMore }
}

export default UseFetchUseditemQuestions
