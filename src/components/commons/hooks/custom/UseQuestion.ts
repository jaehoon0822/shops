import { useRef, useState } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { answerPageState, pageState } from '../../../../commons/stores'
import UseFetchUserLoggedIn from '../query/UseFetchUserLoggedIn'
import UseMutationDeleteUseditemQuestion from '../mutation/UseMutationDeleteUseditemQuestion'
import { FETCH_USEDITEM_QUESTIONS } from '../query/UseFetchUseditemQuestions'
import UseMutationUpdateUseditemQuestion from '../mutation/UseMutationUpdateUseditemQuestion'
import {
  ICreateUseditemQuestionAnswerInput,
  IUpdateUseditemQuestionInput,
} from '../../../../commons/types/generated/types'
import UseFetchUseditemQuestonAnswers, {
  FETCH_USEDITEM_QUESTION_ANSWERS,
} from '../query/UseFetchUseditemQuestonAnswers'
import UseMutationCreateUseditemQuestionAnswer from '../mutation/UseMutationCreateUseditemQuestionAnswer'

const UseQuestion = (boardId: string, questionId: string) => {
  const refContainer = useRef<HTMLDivElement>(null)
  const setPage = useSetRecoilState(pageState)
  const [answerPage, setAnswerPage] = useRecoilState(answerPageState)
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [isAnswer, setIsAnswer] = useState<boolean>(false)
  const { data: loggedInData } = UseFetchUserLoggedIn()
  const { data: fetchData, fetchMore } =
    UseFetchUseditemQuestonAnswers(questionId)
  const { deleteUseditemQuestion } = UseMutationDeleteUseditemQuestion()
  const { updateUseditemQuestion } = UseMutationUpdateUseditemQuestion()
  const { createUseditemQuestionAnswer } =
    UseMutationCreateUseditemQuestionAnswer()
  const onClickIsEditToggle = () => {
    setIsEdit((prev) => !prev)
  }
  const onClickIsAnswerToggle = () => {
    setIsAnswer((prev) => !prev)
  }

  const onClickDeleteQuestion = () => {
    void deleteUseditemQuestion({
      variables: {
        useditemQuestionId: questionId,
      },
      awaitRefetchQueries: true,
      refetchQueries: [
        {
          query: FETCH_USEDITEM_QUESTIONS,
          variables: {
            useditemId: boardId,
            // page,
          },
        },
      ],
    })
    setPage(1)
  }
  const onClickUpdateQuestion = (data: IUpdateUseditemQuestionInput) => {
    void updateUseditemQuestion({
      variables: {
        updateUseditemQuestionInput: data,
        useditemQuestionId: questionId,
      },
      awaitRefetchQueries: true,
      refetchQueries: [
        {
          query: FETCH_USEDITEM_QUESTIONS,
          variables: {
            useditemId: boardId,
          },
        },
      ],
    })
    setPage(1)
    setIsEdit((prev) => !prev)
  }

  const onSubmitCreateUseditemQuestionAnswer = (
    data: ICreateUseditemQuestionAnswerInput,
  ) => {
    void createUseditemQuestionAnswer({
      variables: {
        useditemQuestionId: questionId,
        createUseditemQuestionAnswerInput: data,
      },
      awaitRefetchQueries: true,
      refetchQueries: [
        {
          query: FETCH_USEDITEM_QUESTION_ANSWERS,
          variables: {
            useditemQuestionId: questionId,
          },
        },
      ],
    })
    setAnswerPage(1)
    setIsAnswer((prev) => !prev)
  }

  const onLoadMore = (): void => {
    if (fetchData === undefined) return

    void fetchMore({
      variables: {
        page: answerPage + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditemQuestionAnswers.length === 0)
          return prev
        setAnswerPage((prevAnswerPage) => prevAnswerPage + 1)
        return {
          fetchUseditemQuestionAnswers: [
            ...prev.fetchUseditemQuestionAnswers,
            ...fetchMoreResult.fetchUseditemQuestionAnswers,
          ],
        }
      },
    })
  }

  return {
    refContainer,
    loggedInData,
    fetchData,
    isEdit,
    isAnswer,
    onLoadMore,
    onClickIsEditToggle,
    onClickIsAnswerToggle,
    onClickDeleteQuestion,
    onClickUpdateQuestion,
    onSubmitCreateUseditemQuestionAnswer,
  }
}

export default UseQuestion
