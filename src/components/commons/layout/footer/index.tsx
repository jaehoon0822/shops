import Image from 'next/image'
import tw from 'twin.macro'
import { v4 as uuidv4 } from 'uuid'
import {
  ContentsBox,
  ContentsSpan,
  ContentsWrapper,
  LogoImageWrapper,
} from '../index.styled'
import { Container, Wrapper } from '../../../../commons/styles'
import UseFooter from '../../hooks/custom/UseFooter'

const Footer = () => {
  const { footerInfo } = UseFooter()
  return (
    <Container
      css={tw`bg-gray-100 p-14 border-t-[1px] border-black border-solid mt-[116px]`}
    >
      <Wrapper css={tw`flex-col items-start`}>
        <LogoImageWrapper css={tw`h-10`}>
          <Image
            src="/images/logo-black.svg"
            width={100}
            height={40}
            alt="logo"
          />
        </LogoImageWrapper>
        <ContentsWrapper
          css={tw`px-2 flex-col items-start font-[400] text-[14px]`}
        >
          {footerInfo.map((info) =>
            info.length === 2 ? (
              <ContentsBox key={uuidv4()} css={tw`py-1.5`}>
                <ContentsSpan css={tw`pr-16`}>{info[0]}</ContentsSpan>
                <ContentsSpan>{info[1]}</ContentsSpan>
              </ContentsBox>
            ) : (
              <ContentsBox key={uuidv4()} css={tw`py-1.5`}>
                <ContentsSpan>{info}</ContentsSpan>
              </ContentsBox>
            ),
          )}
        </ContentsWrapper>
      </Wrapper>
    </Container>
  )
}

export default Footer
