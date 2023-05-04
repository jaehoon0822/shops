import React from 'react'
import 'twin.macro'
import { Div, DividerX } from '../../../commons/styles'

interface BrandSubTitleProps {
  title: string
}

const BrandSubTitle = ({ title }: BrandSubTitleProps) => {
  return (
    <Div tw="flex-col mb-20">
      <Div tw="mb-5">
        <h3 tw="font-bold text-[32px]">{title}</h3>
      </Div>
      <DividerX h="2px" w="100%" color="#000" />
    </Div>
  )
}

export default BrandSubTitle
