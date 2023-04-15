import tw, { TwStyle } from 'twin.macro'
import { ButtonVariant } from './types'

export const ButtonVariants: Record<ButtonVariant, TwStyle> = {
  big: tw`w-[186px] h-full`,
  default: tw`w-[186px] h-[56px]`,
  small: tw`px-4 py-3.5`,
}
