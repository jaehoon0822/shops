import 'twin.macro'
import { Button, Container, Wrapper } from '../../commons/styles'

const ErrorPage = () => {
  return (
    <Wrapper tw="flex-col">
      <h1 tw="text-4xl">로그인되지 않았습니다.</h1>
      <Button>로그인페이지로 이동하기</Button>
    </Wrapper>
  )
}

export default ErrorPage
