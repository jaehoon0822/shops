import Link from 'next/link'
import tw from 'twin.macro'
import { ContentsLink, ContentsSpan } from '../../index.styled'
import UseFetchUserLoggedIn from '../../../hooks/query/UseFetchUserLoggedIn'

const PointInfo = () => {
  const { data } = UseFetchUserLoggedIn()
  return (
    <ContentsSpan>
      <ContentsSpan
        css={tw`
            font-extrabold 
          `}
      >
        {data?.fetchUserLoggedIn.name}
      </ContentsSpan>
      님 포인트
      <Link href="/">
        <ContentsLink>
          <ContentsSpan
            css={tw`
              px-4
          `}
          >
            {data?.fetchUserLoggedIn.userPoint?.amount} P 충전
          </ContentsSpan>
        </ContentsLink>
      </Link>
    </ContentsSpan>
  )
}

export default PointInfo
