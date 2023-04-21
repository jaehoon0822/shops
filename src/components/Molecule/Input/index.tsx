import tw, { css } from 'twin.macro'
import { useFormContext } from 'react-hook-form'
import { Div, StyledInput } from '../../../commons/styles'
import { ContentsSpan } from '../../commons/layout/index.styled'

interface InputProps {
  label?: string
  name: string
  placeholder?: string
  type?: string
  defaultValue?: string
  width?: string
}

const Input = ({ name, label, width, ...rest }: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <Div
      css={[
        tw`relative`,
        css`
          width: ${width};
        `,
      ]}
    >
      <ContentsSpan
        css={tw`block whitespace-nowrap w-[113px] text-left pr-32 font-bold`}
      >
        {label}
      </ContentsSpan>
      <StyledInput {...rest} {...register(name)} />
      <Div tw="absolute top-16 left-36 text-red-400">
        <span>{errors[name]?.message ?? null}</span>
      </Div>
    </Div>
  )
}

export default Input
