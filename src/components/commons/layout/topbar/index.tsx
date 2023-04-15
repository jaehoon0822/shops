import Image from 'next/image'
import tw from 'twin.macro'
import { Container, Wrapper } from '../../../../commons/styles'
import {
  LogoImageWrapper,
  ContentsBox,
  ContentsLink,
  ContentsSpan,
  ContentsWrapper,
} from '../index.styled'
import UseTopbar from '../../hooks/custom/UseTopbar'

const Topbar = () => {
  const { isLoggedIn, onMoveLoginPage, onMoveSignUpPage, onMoveMainPage } =
    UseTopbar()

  return (
    <Container>
      <Wrapper>
        <LogoImageWrapper
          css={tw`
          cursor-pointer 
        `}
          onClick={onMoveMainPage}
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
              <ContentsSpan>
                <ContentsSpan
                  css={tw`
                    font-extrabold 
                  `}
                >
                  노은정
                </ContentsSpan>
                님 포인트
                <ContentsLink>
                  <ContentsSpan
                    css={tw`
                    px-4
                `}
                  >
                    1,490 P
                  </ContentsSpan>
                  <ContentsSpan>충전</ContentsSpan>
                </ContentsLink>
              </ContentsSpan>
            ) : (
              <ContentsLink onClick={onMoveLoginPage}>로그인</ContentsLink>
            )}
          </ContentsBox>
          <ContentsBox>
            {isLoggedIn ? (
              <ContentsLink>로그아웃</ContentsLink>
            ) : (
              <ContentsLink onClick={onMoveSignUpPage}>회원가입</ContentsLink>
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
