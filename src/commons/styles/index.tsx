import tw, { styled } from 'twin.macro'
import { ButtonProps, DividerYProps } from './types'
import { ButtonVariants } from './variants'

export const Div = tw.div`
  flex
  justify-between
  items-center
  w-full
`

export const Wrapper = tw.div`
  flex
  justify-between
  items-center
  w-[1750px]
`

export const Container = tw.div`
  flex
  justify-center
  bg-white
`

export const DividerY = styled.div<DividerYProps>`
  background-color: #fff;
  height: ${({ h }) => h ?? null};
  width: ${({ w }) => w ?? '1px'};
`

export const StyledInput = tw.input`
  outline-none
  border-none
  py-[21px]
  px-[18px]
  w-full
  border
  text-[15px]
  placeholder:text-[#a9a9a9]
  bg-[#e9e9e9]
`

export const Button = styled.button<ButtonProps>(() => [
  ({ variant = 'default' }) => ButtonVariants[variant],
  ({ isFilled = 'false' }) =>
    isFilled
      ? tw`bg-black text-white outline outline-2 outline-black `
      : tw`bg-white text-black outline outline-2 outline-black `,
])
