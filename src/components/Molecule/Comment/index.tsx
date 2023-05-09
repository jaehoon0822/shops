import React, { useRef } from 'react'
import 'twin.macro'
import InfiniteScroll from 'react-infinite-scroller'
import { Div } from '../../../commons/styles'
import UseFetchUseditemQuestions from '../../commons/hooks/query/UseFetchUseditemQuestions'
import Question from '../Question'

interface ICommentProps {
  id: string
}

const Comment = ({ id }: ICommentProps) => {
  const { data, onLoadMore } = UseFetchUseditemQuestions(id)
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <Div tw="flex-col">
      <Div
        tw="scrollbar-hide max-h-[1000px] overflow-auto flex-col w-full"
        ref={containerRef}
      >
        <InfiniteScroll
          pageStart={0}
          loadMore={onLoadMore}
          useWindow={false}
          hasMore
          getScrollParent={() => containerRef.current}
          tw="w-full"
        >
          {data ? (
            data?.map((question) => (
              <Div
                tw="border-solid border-y-[1px] border-gray-100 justify-between items-start w-full"
                key={question._id}
              >
                <Div tw="w-[103px] py-2 mr-6 bg-black text-white text-end justify-center my-14">
                  <span tw="text-[15px]">{question.user.name}</span>
                </Div>
                <Question question={question} boardId={id} />
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

export default Comment
