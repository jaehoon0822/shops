export type ButtonVariant = 'big' | 'default' | 'small'

export interface DividerProps {
  h: string
  w?: string
  color?: string
}

export interface ButtonProps {
  isFilled?: boolean
  variant?: ButtonVariant
}
