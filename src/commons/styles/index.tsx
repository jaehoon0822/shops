import tw, { styled } from 'twin.macro'
import { ButtonProps, DividerProps } from './types'
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
  px-12
  flex
  justify-center
  bg-white
`

export const H1 = tw.h1`
  mb-2 
  mt-0
  text-5xl
  font-medium
  leading-tight
`
export const H2 = tw.h1`
  mb-2
  mt-0
  text-4xl
  font-medium
  leading-tight
`
export const H3 = tw.h1`
  mb-2 
  mt-0
  text-3xl
  font-medium
  leading-tight
`

export const DividerY = styled.div<DividerProps>`
  background-color: ${({ color }) => color ?? 'white'};
  height: ${({ h }) => h ?? null};
  width: ${({ w }) => w ?? '1px'};
`

export const DividerX = styled.div<DividerProps>`
  background-color: ${({ color }) => color ?? 'white'};
  height: ${({ h }) => h ?? '1px'};
  width: ${({ w }) => w ?? '100%'};
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
      ? tw`bg-black text-white outline outline-2 outline-black transition-all duration-100 ease-in hover:(opacity-50) active:(opacity-100 bg-black text-white)`
      : tw`bg-white text-black outline outline-2 outline-black transition-all duration-100 ease-in hover:(opacity-50) active:(opacity-100)`,
])
