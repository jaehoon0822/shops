import React, { Fragment } from 'react'
import 'twin.macro'
import { Div, H3 } from '../../../commons/styles'
import Card from '../Card'
import UseBrandMainBest from '../../commons/hooks/custom/UseBrandMainBest'

const BrandMainBest = () => {
  const { useditemsOfTheBestData } = UseBrandMainBest()
  return (
    <Div tw="bg-white p-12 flex-col items-center w-full">
      <H3 tw="font-bold text-gray-600">BEST</H3>
      <Div tw="grid grid-cols-4 gap-[116px]">
        {useditemsOfTheBestData?.map((useditem) => (
          <Fragment key={useditem._id}>
            <Card
              desc={useditem.remarks}
              emphasis="7%"
              price={useditem.price ?? 0}
              title={useditem.name}
              id={useditem._id}
              src={useditem.images?.[0] ?? ''}
            />
          </Fragment>
        ))}
      </Div>
    </Div>
  )
}

export default BrandMainBest
