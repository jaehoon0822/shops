import 'twin.macro'
import { Div } from '../../../commons/styles'
import Textarea from '../Textarea'
import UseAnswer from '../../commons/hooks/custom/UseAnswer'
import getDate from '../../../commons/libraries/getDate'
import Buttons from '../Question/Buttons'
import { IUseditemQuestionAnswer } from '../../../commons/types/generated/types'

interface IAnswerProps {
  answer: IUseditemQuestionAnswer
  loggedInId?: string
  questionId: string
  onClickIsAnswerToggle: () => void
}

const Answer = ({
  answer,
  onClickIsAnswerToggle,
  loggedInId,
  questionId,
}: IAnswerProps) => {
  const {
    onClickDeleteUseditemQuestionAnswer,
    onSubmitUpdateUseditemQuestionAnswer,
    onClickIsEditToggle,
    isEdit,
  } = UseAnswer(questionId)
  return (
    <>
      {answer ? (
        <Div
          key={answer._id}
          tw="w-full flex-col py-12 items-start border-b-[1px] border-dashed border-gray-200 first-of-type:pt-0 last-of-type:border-0"
        >
          {isEdit ? (
            <Textarea
              name="contents"
              onClick={onClickIsEditToggle}
              onSubmit={(data) => {
                onSubmitUpdateUseditemQuestionAnswer(answer._id)(data)
              }}
              defaultValues={{
                contents: answer.contents,
              }}
              isComment
              isEdit
            />
          ) : (
            <>
              <Div tw="w-full">
                <span tw="font-bold pb-4">{answer.user.name}</span>
                <Div tw="w-fit">
                  <Buttons
                    isOwner={loggedInId === answer.user._id}
                    onClickDelete={onClickDeleteUseditemQuestionAnswer(
                      answer._id,
                    )}
                    onClickIsEditToggle={onClickIsEditToggle}
                  />
                </Div>
              </Div>
              <span tw="pb-4 text-gray-300">{getDate(answer.createdAt)}</span>
              <span>{answer.contents}</span>
            </>
          )}
        </Div>
      ) : null}
    </>
  )
}

export default Answer
