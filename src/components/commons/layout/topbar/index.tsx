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
  const { isLoggedIn, onClickLogout, cartNumber, data } = UseTopbar()
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
              <PointInfo userData={data?.fetchUserLoggedIn} />
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
            <ContentsLink tw="whitespace-nowrap">장바구니</ContentsLink>
            <Div tw="justify-center rounded-full p-2 bg-red-500 w-8 h-8 text-white">
              <span>{cartNumber}</span>
            </Div>
          </ContentsBox>
        </ContentsWrapper>
      </Wrapper>
    </Container>
  )
}

export default Topbar
