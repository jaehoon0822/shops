import tw from 'twin.macro'
import { Div } from '../../../commons/styles'

export const CarouselWrapper = tw(Div)`
  relative
  overflow-hidden
  w-full
  min-h-[750px]
  bg-gray-200
`
export const CarouselContent = tw(Div)`
  flex-none
  relative
  min-h-[750px]
  w-full
  min-w-full
  transition-all
  ease-in-out
  duration-1000
`

export const DotWrapper = tw(Div)`
  justify-center
  absolute
  bottom-0
`

export const Dot = tw(Div)`
  transition-all
  ease-in-out
  duration-500
  cursor-pointer
  rounded
  bg-black
  w-4
  h-4
  m-4
  hover:bg-white
`
