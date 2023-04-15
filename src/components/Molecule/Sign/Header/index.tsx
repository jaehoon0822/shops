import React from 'react'
import tw from 'twin.macro'
import { Div } from '../../../../commons/styles'

interface SignHeaderProps {
  title: string
}

const SignHeader = ({ title }: SignHeaderProps) => {
  return (
    <Div css={tw`flex-col border-b-[3px] border-black border-solid w-full`}>
      <span css={tw`text-[40px] py-24`}>{title}</span>
    </Div>
  )
}

export default SignHeader
