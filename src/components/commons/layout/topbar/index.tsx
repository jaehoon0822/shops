import Image from 'next/image'
import Link from 'next/link'
import tw from 'twin.macro'
import { Container, Div, Wrapper } from '../../../../commons/styles'
import {
  LogoImageWrapper,
  ContentsBox,
  ContentsLink,
  ContentsWrapper,
} from '../index.styled'
import UseTopbar from '../../hooks/custom/UseTopbar'
import UseMovePage from '../../hooks/custom/UseMovePage'
import PointInfo from './pointInfo'

const Topbar = () => {
  const { isLoggedIn, onClickLogout } = UseTopbar()
  const { onMovePage } = UseMovePage()

  return (
    <Container>
      <Wrapper>
        <LogoImageWrapper
          css={tw`
          cursor-pointer 
        `}
          onClick={onMovePage('/')}
        >
          <Image
            src="/images/logo-black.svg"
            alt="logo"
            width="100"
            height="100"
          />
        </LogoImageWrapper>
        <ContentsWrapper>
          <ContentsBox>
            {isLoggedIn ? (
              <PointInfo />
            ) : (
              <Link href="/SignIn">
                <ContentsLink>로그인</ContentsLink>
              </Link>
            )}
          </ContentsBox>
          <ContentsBox>
            {isLoggedIn ? (
              <Div onClick={onClickLogout}>
                <ContentsLink>로그아웃</ContentsLink>
              </Div>
            ) : (
              <Link href="/SignUp">
                <ContentsLink>회원가입</ContentsLink>
              </Link>
            )}
          </ContentsBox>
          <ContentsBox>
            <ContentsLink>장바구니</ContentsLink>
          </ContentsBox>
        </ContentsWrapper>
      </Wrapper>
    </Container>
  )
}

export default Topbar
