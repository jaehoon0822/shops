export type ButtonVariant = 'big' | 'default' | 'small'

export interface DividerYProps {
  h: string
  w?: string
}

export interface ButtonProps {
  isFilled?: boolean
  variant?: ButtonVariant
}
