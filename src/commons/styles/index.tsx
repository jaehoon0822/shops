import tw, { styled } from 'twin.macro'
import { DividerYProps } from './types'

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
