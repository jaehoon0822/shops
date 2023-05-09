import React from 'react'
import 'twin.macro'
import Image from 'next/image'
import Link from 'next/link'
import {
  BrandHeaderWrapper,
  HeaderTitle,
  HeaderTitleWrapper,
  BrandHeaderTopBarSpan,
  BrandHeaderTopBarWrapper,
} from '../index.style'
import { Div } from '../../../../commons/styles'
import UseFetchUserLoggedIn from '../../../commons/hooks/query/UseFetchUserLoggedIn'

interface HeaderProps {
  sellerId?: string
  brandId?: string
  title: string
  onClickDeleteUseditem: () => void
}

const Header = ({
  title,
  sellerId,
  brandId,
  onClickDeleteUseditem,
}: HeaderProps) => {
  const { data } = UseFetchUserLoggedIn()
  return (
    <BrandHeaderWrapper>
      <BrandHeaderTopBarWrapper tw="w-full">
        <Div>
          <BrandHeaderTopBarSpan>AVANDRESS</BrandHeaderTopBarSpan>
        </Div>
        {data?.fetchUserLoggedIn._id === sellerId ? (
          <Div tw="w-fit">
            <Div>
              <Link href={`/Brand/${brandId}/edit`}>
                <button type="button">
                  <Image
                    src="/ico/ic_edit.svg"
                    height="14px"
                    width="14px"
                    alt="edit icon"
                  />
                </button>
              </Link>
            </Div>
            <Div tw="pl-5">
              <button type="button" onClick={onClickDeleteUseditem}>
                <Image
                  src="/ico/ic_delete.svg"
                  height="24px"
                  width="24px"
                  alt="delete icon"
                />
              </button>
            </Div>
          </Div>
        ) : null}
      </BrandHeaderTopBarWrapper>
      <HeaderTitleWrapper>
        <HeaderTitle>{title}</HeaderTitle>
      </HeaderTitleWrapper>
    </BrandHeaderWrapper>
  )
}

export default Header
