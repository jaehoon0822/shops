import tw, { TwStyle } from 'twin.macro'
import { ContentsWrapperVariant } from './index.types'

export const ContentsWrapperVariants: Record<ContentsWrapperVariant, TwStyle> =
  {
    full: tw`w-[1740px]`,
    default: tw`w-[1286px]`,
    none: tw`w-auto`,
  }
