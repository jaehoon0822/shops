import tw from 'twin.macro'
import { Div } from '../../../commons/styles'

export const HeaderWrapper = tw(Div)`
  flex-col
  items-start
`

export const HeaderTitle = tw.h2`
  font-bold
  text-[40px]
  pb-7
`

export const ContentsWrapper = tw(Div)`
  w-[100%]
  flex-col
`
