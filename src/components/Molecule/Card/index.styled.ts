import tw from 'twin.macro'
import { Div } from '../../../commons/styles'

export const EmpasisWrapper = tw(Div)`
  pt-3.5
  flex-row
  justify-start
`

export const EmphasisSpan = tw.span`
  whitespace-nowrap
  font-bold
  text-[20px]
  text-primaryRed
  pr-3.5
`

export const PriceSpan = tw.span`
  font-bold
  text-[20px]
  text-black
`

export const DescWrapper = tw(Div)`
  flex-col
`

export const TitleSpan = tw.span`
  font-medium
  text-[16px]
  text-primaryGray
`

export const DescSpan = tw.span`
  font-medium
  text-[14px]
  text-primaryGray
`
