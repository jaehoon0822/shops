import 'twin.macro'
import InfiniteScroll from 'react-infinite-scroller'
import { Div } from '../../../commons/styles'
import { IUseditemQuestion } from '../../../commons/types/generated/types'
import getDate from '../../../commons/libraries/getDate'
import Textarea from '../Textarea'
import UseQuestion from '../../commons/hooks/custom/UseQuestion'
import Buttons from './Buttons'
import Answer from '../Answer'

interface IQuestionProps {
  question: IUseditemQuestion
  boardId: string
}

const Question = ({ question, boardId }: IQuestionProps) => {
  const {
    refContainer,
    loggedInData,
    fetchData,
    isEdit,
    isAnswer,
    onLoadMore,
    onClickDeleteQuestion,
    onClickIsEditToggle,
    onClickIsAnswerToggle,
    onClickUpdateQuestion,
    onSubmitCreateUseditemQuestionAnswer,
  } = UseQuestion(boardId, question._id)

  return (
    <Div tw="flex-col pt-14 w-full">
      <Div tw="w-full">
        {isEdit ? (
          <Textarea
            name="contents"
            onClick={onClickIsEditToggle}
            onSubmit={onClickUpdateQuestion}
            defaultValues={{
              contents: question.contents,
            }}
            isComment
            isEdit
          />
        ) : (
          <Div tw="pt-2 pb-12">{question.contents}</Div>
        )}
        {!isEdit ? (
          <Div tw="w-fit pb-12">
            <span tw="w-fit whitespace-nowrap pr-12">
              {getDate(question.createdAt)}
            </span>
            <Buttons
              isOwner={
                question.user._id === loggedInData?.fetchUserLoggedIn._id
              }
              onClickDelete={onClickDeleteQuestion}
              onClickIsEditToggle={onClickIsEditToggle}
              onClickIsAnswerToggle={onClickIsAnswerToggle}
            />
          </Div>
        ) : null}
      </Div>
      {isAnswer && (
        <Div tw="flex-col pt-12 border-t-[1px] border-dashed border-gray-200">
          <Textarea
            name="contents"
            onClick={onClickIsAnswerToggle}
            onSubmit={onSubmitCreateUseditemQuestionAnswer}
            isComment
          />
        </Div>
      )}
      <Div
        tw="flex-col max-h-[1000px] w-full overflow-auto scrollbar-hide"
        ref={refContainer}
      >
        <InfiniteScroll
          pageStart={0}
          loadMore={onLoadMore}
          useWindow={false}
          getScrollParent={() => refContainer.current}
          hasMore
          tw="w-full"
        >
          {fetchData?.fetchUseditemQuestionAnswers ? (
            fetchData?.fetchUseditemQuestionAnswers.map((answer) => (
              <Div
                key={answer._id}
                tw="flex-col pt-12 border-t-[1px] border-dashed border-gray-200 w-full"
              >
                <Answer
                  answer={answer}
                  loggedInId={loggedInData?.fetchUserLoggedIn._id}
                  onClickIsAnswerToggle={onClickIsAnswerToggle}
                  questionId={question._id}
                />
              </Div>
            ))
          ) : (
            <></>
          )}
        </InfiniteScroll>
      </Div>
    </Div>
  )
}

export default Question
