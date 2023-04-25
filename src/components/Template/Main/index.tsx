import React, { Fragment } from 'react'
import 'twin.macro'
import { Div, Wrapper } from '../../../commons/styles'
import { MainTitle } from './index.styled'
import Card from '../../Molecule/Card'
import { IUseditem } from '../../../commons/types/generated/types'

interface IMainProps {
  boards: IUseditem[]
}

const Main = ({ boards }: IMainProps) => {
  return (
    <Wrapper tw="w-[1270px] flex-none flex-col">
      <Div tw="w-full justify-center pt-[89px] pb-[98px]">
        <MainTitle>New Arrival</MainTitle>
      </Div>
      <Div tw="grid grid-cols-4 gap-[116px]">
        {boards.map((board, idx) =>
          idx + 1 <= 8 ? (
            <Fragment key={board._id}>
              <Card
                id={board._id}
                src={board.images?.[0] ?? ''}
                emphasis="대표태그"
                price={board.price ?? 0}
                title={board.name}
                desc={board.remarks}
              />
            </Fragment>
          ) : null,
        )}
      </Div>
    </Wrapper>
  )
}

export default Main
