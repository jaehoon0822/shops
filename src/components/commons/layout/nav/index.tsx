import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import tw from 'twin.macro'
import Image from 'next/image'
import {
  ContentsBox,
  ContentsLink,
  ContentsWrapper,
  LogoImageWrapper,
} from '../index.styled'
import { Container, DividerY, Wrapper } from '../../../../commons/styles'
import UseNav from '../../hooks/custom/UseNav'
import UseMovePage from '../../hooks/custom/UseMovePage'

interface NavProps {
  isSignPage: boolean
}

const Nav = ({ isSignPage }: NavProps) => {
  const { navContents, navInfos, pathname } = UseNav()
  const { onMovePage } = UseMovePage()

  return (
    <Container css={tw`bg-black h-[100px]`}>
      <Wrapper css={tw`mx-auto`}>
        <ContentsWrapper
          css={tw`justify-between text-[20px]
          w-[1270px]
          mx-auto
        `}
        >
          {isSignPage ? (
            <LogoImageWrapper onClick={onMovePage('/')}>
              <Image
                src="/images/logo-white.svg"
                width="100px"
                height="100px"
                alt="logo"
              />
            </LogoImageWrapper>
          ) : null}
          {navContents.map((content) => (
            <ContentsBox key={uuidv4()}>
              <ContentsLink css={tw`text-white`}>{content}</ContentsLink>
            </ContentsBox>
          ))}
          <DividerY h="20px" w="2px" />
          {navInfos.map((info) => (
            <ContentsBox key={uuidv4()}>
              <ContentsLink css={tw`text-white`}>{info}</ContentsLink>
            </ContentsBox>
          ))}
        </ContentsWrapper>
        {isSignPage ? (
          <ContentsWrapper css={tw`text-[14px] mx-auto`}>
            <ContentsBox>
              <ContentsLink
                css={tw`text-white`}
                onClick={
                  pathname === '/signIn'
                    ? onMovePage('/signUp')
                    : onMovePage('/signIn')
                }
              >
                {pathname === '/signIn' ? '회원가입' : '로그인'}
              </ContentsLink>
            </ContentsBox>
            <ContentsBox>
              <ContentsLink css={tw`text-white`}>장바구니</ContentsLink>
            </ContentsBox>
          </ContentsWrapper>
        ) : null}
      </Wrapper>
    </Container>
  )
}

export default Nav
