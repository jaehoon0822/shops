import tw from 'twin.macro'
import { useFormContext } from 'react-hook-form'
import { Div, StyledInput } from '../../../commons/styles'
import { ContentsSpan } from '../../commons/layout/index.styled'

interface InputProps {
  label: string
  name: string
  placeholder?: string
  type?: string
  defaultValue?: string
}

const Input = ({ name, label, ...rest }: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return (
    <Div tw="relative">
      <ContentsSpan css={tw`block whitespace-nowrap w-[113px] text-left pr-20`}>
        {label}
      </ContentsSpan>
      <StyledInput {...rest} {...register(name)} />
      <Div tw="absolute top-16 left-28 text-red-400">
        <span>{errors[name]?.message ?? null}</span>
      </Div>
    </Div>
  )
}

export default Input
