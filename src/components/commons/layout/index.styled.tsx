import tw from 'twin.macro'

export const ContentsWrapper = tw.div`
  flex
  justify-between
  items-center
`

export const ContentsBox = tw.div`
  flex
  justify-center
  items-center
  text-black
  text-center
`

export const ContentsSpan = tw.span`
  text-black
  text-center
  px-1
`

export const ContentsLink = tw.a`
  text-black
  cursor-pointer
  text-center
  px-7
  hover:underline
  underline-offset-4
`

export const LogoImageWrapper = tw.div`
  h-[100px]
  cursor-pointer
`
