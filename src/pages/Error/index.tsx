import 'twin.macro'
import { Button, Div, Wrapper } from '../../commons/styles'

interface IErrorPageProps {
  btnLabel: string
  title: string
  onMovePage: () => void
}

const ErrorPage = ({ btnLabel, title, onMovePage }: IErrorPageProps) => {
  return (
    <Wrapper tw="flex-col h-full justify-center items-center gap-12 pt-[132px]">
      <Div tw="w-full justify-center items-center">
        <h1 tw="text-4xl font-bold">{title}</h1>
      </Div>
      <Div tw="w-full justify-center">
        <Button onClick={onMovePage}>{btnLabel}</Button>
      </Div>
    </Wrapper>
  )
}

export default ErrorPage
