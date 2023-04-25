import tw from 'twin.macro'
import { Div } from '../../../commons/styles'

export const UploadImageInput = tw.input`
  hidden
`

export const UploadBox = tw(Div)`
  w-[180px]
  h-[180px]
  bg-[#bdbdbd]
  flex-col
  items-center
  justify-center
  cursor-pointer
  border-[1px]
  border-[#bdbdbd]
  border-solid
`

export const UploadBoxSpan = tw.span`
  text-[#4f4f4f]
  text-[16px]
`
