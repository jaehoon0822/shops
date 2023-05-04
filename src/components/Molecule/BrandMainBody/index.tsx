import React from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import Link from 'next/link'
import tw from 'twin.macro'
import { Button, Div } from '../../../commons/styles'
import { SearchInput } from './index.styled'
import UseBrandMainBody from '../../commons/hooks/custom/UseBrandMainBody'
import Card from '../Card'

const BrandMainBody = () => {
  const { useditemsData, onChangeSearch, onLoadMore, refContainer } =
    UseBrandMainBody()
  return (
    <Div tw="p-12 flex-col">
      <Div tw="pb-12 mb-12 border-b-[1px] border-black border-solid">
        <Div>
          <Link href="/Registration">
            <Button isFilled={false} tw="font-bold">
              상품등록
            </Button>
          </Link>
        </Div>
        <Div tw="w-fit">
          <SearchInput tw="w-[534px]" onChange={onChangeSearch} />
        </Div>
      </Div>
      <Div
        tw="justify-start items-start pb-12 overflow-auto max-h-[1000px] scrollbar-hide"
        ref={refContainer}
      >
        <InfiniteScroll
          pageStart={0}
          loadMore={onLoadMore}
          getScrollParent={() => refContainer.current}
          useWindow={false}
          hasMore
          css={tw`
            flex
            flex-wrap
            gap-[116px]
          `}
        >
          {useditemsData ? (
            useditemsData?.map((useditem) => (
              <Div key={useditem._id} tw="w-[206px]">
                <Card
                  desc={useditem.remarks}
                  emphasis="7%"
                  price={useditem.price ?? 0}
                  title={useditem.name}
                  id={useditem._id}
                  src={useditem.images?.[0] ?? ''}
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

export default BrandMainBody
