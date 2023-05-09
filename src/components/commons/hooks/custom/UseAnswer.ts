import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { IUpdateUseditemQuestionAnswerInput } from '../../../../commons/types/generated/types'
import UseMutationDeleteUseditemQuestionAnswer from '../mutation/UseMutationDeleteUseditemQuestionAnswer'
import UseMutationUpdateUseditemQuestionAnswer from '../mutation/UseMutationUpdateUseditemQuestionAnswer'
import { FETCH_USEDITEM_QUESTION_ANSWERS } from '../query/UseFetchUseditemQuestonAnswers'
import { answerPageState } from '../../../../commons/stores'

const UseAnswer = (questionId: string) => {
  const setAnswerPage = useSetRecoilState(answerPageState)
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const { updateUseditemQuestionAnswer } =
    UseMutationUpdateUseditemQuestionAnswer()
  const { deleteUseditemQuestionAnswer } =
    UseMutationDeleteUseditemQuestionAnswer()

  const onSubmitUpdateUseditemQuestionAnswer =
    (useditemQuestionAnswerId: string) =>
    (data: IUpdateUseditemQuestionAnswerInput) => {
      void updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: data,
          useditemQuestionAnswerId,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: {
              useditemQuestionId: questionId,
            },
          },
        ],
      })
      setIsEdit((prev) => !prev)
      setAnswerPage(1)
    }

  const onClickDeleteUseditemQuestionAnswer =
    (useditemQuestionAnswerId: string) => () => {
      void deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId,
        },
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
    }

  const onClickIsEditToggle = () => {
    setIsEdit((prev) => !prev)
  }

  return {
    onSubmitUpdateUseditemQuestionAnswer,
    onClickDeleteUseditemQuestionAnswer,
    onClickIsEditToggle,
    isEdit,
  }
}

export default UseAnswer
