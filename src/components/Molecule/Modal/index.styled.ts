import tw from 'twin.macro'

export const ModalBg = tw.div`
  fixed
  top-0
  left-0
  w-full
  h-full
  bg-black
  overflow-hidden
  overflow-y-auto
  bg-opacity-40
  transition-all
  duration-100
  ease-in
  z-30
`

export const ModalWrapper = tw.div`
  absolute
  p-10
  top-1/2
  left-1/2
  translate-x-[-50%]
  translate-y-[-50%]
  bg-white
  rounded-xl
  flex-col
`

export const ModalCloseWrapper = tw.div`
  absolute
  top-5
  right-5
  cursor-pointer
`

export const ModalContents = tw.div`
  w-96
  py-10
  text-black
  text-center
`
