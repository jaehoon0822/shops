import tw from 'twin.macro'
import { Div } from '../../../commons/styles'

export const BrandHeaderWrapper = tw(Div)`
  flex-col
  items-start
  justify-start
  w-full
`

export const BrandHeaderTopBarWrapper = tw(Div)`
  justify-between
  w-full
`

export const BrandHeaderTopBarSpan = tw.span`
  font-light
  font-[12px]
`

export const HeaderTitleWrapper = tw(Div)`
  justify-start
`

export const HeaderTitle = tw.h2`
  font-bold
  text-[40px]
`
