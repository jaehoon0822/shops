import React from 'react'
import Image from 'next/image'
import 'twin.macro'
import { v4 as uuidv4 } from 'uuid'
import { Div, DividerX } from '../../../../commons/styles'
import {
  BrandHeaderTopBarSpan,
  BrandHeaderTopBarWrapper,
  BrandHeaderWrapper,
} from '../index.style'
import { IUseditem } from '../../../../commons/types/generated/types'

interface IBodyProps {
  brand: IUseditem
  isPicked: boolean
  onClickUseditemPick: () => Promise<void>
}

const Body = ({ brand, onClickUseditemPick, isPicked }: IBodyProps) => {
  return (
    <BrandHeaderWrapper>
      <BrandHeaderTopBarWrapper tw="pt-[95px] pb-5">
        <Div tw="w-fit">
          <BrandHeaderTopBarSpan tw="pr-[56px] font-medium">
            판매가
          </BrandHeaderTopBarSpan>
          <BrandHeaderTopBarSpan tw="font-bold">
            {brand.price}
          </BrandHeaderTopBarSpan>
          <BrandHeaderTopBarSpan tw="font-medium pl-1">
            원
          </BrandHeaderTopBarSpan>
        </Div>
        <Div tw="w-fit items-center">
          <BrandHeaderTopBarSpan tw="font-bold">MY</BrandHeaderTopBarSpan>
          <button
            type="button"
            tw="px-1 mb-[-4px]"
            onClick={onClickUseditemPick}
          >
            <Image
              src={isPicked ? '/ico/ic_picked.svg' : '/ico/ic_unPicked.svg'}
              width="18px"
              height="16px"
              alt="unpicked icon"
            />
          </button>
          <BrandHeaderTopBarSpan tw="font-bold">Product</BrandHeaderTopBarSpan>
        </Div>
      </BrandHeaderTopBarWrapper>
      <DividerX h="3px" color="#555" />
      <Div tw="pt-5 text-[20px]">{brand.remarks}</Div>
      <Div tw="pt-[32px] justify-start">
        {brand?.tags?.map((tag) => (
          <span
            tw="pl-1 first-of-type:pl-0 font-medium text-red-500"
            key={uuidv4()}
          >
            {tag}
          </span>
        ))}
      </Div>
    </BrandHeaderWrapper>
  )
}

export default Body
