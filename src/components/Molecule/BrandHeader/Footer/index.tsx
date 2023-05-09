import React from 'react'
import 'twin.macro'
import { BrandHeaderWrapper } from '../index.style'
import { Button, Div, DividerX } from '../../../../commons/styles'
import UseFetchUserLoggedIn from '../../../commons/hooks/query/UseFetchUserLoggedIn'

interface IFooterProps {
  userId: string
  isAdded: boolean
  onClickToggleCart: () => void
  onClickBuyItem: () => void
}

const Footer = ({
  userId,
  isAdded,
  onClickToggleCart,
  onClickBuyItem,
}: IFooterProps) => {
  const { data } = UseFetchUserLoggedIn()
  return (
    <BrandHeaderWrapper tw="mt-8">
      <DividerX h="1px" color="#c0c0c0" />
      {!(userId === data?.fetchUserLoggedIn._id) ? (
        <Div tw="mt-8">
          <Div>
            <Button variant="default" tw="w-full mx-2" onClick={onClickBuyItem}>
              <span>BUY NOW</span>
            </Button>
          </Div>
          <Div>
            <Button
              type="button"
              variant="default"
              tw="w-full mx-2"
              onClick={onClickToggleCart}
            >
              <span>{!isAdded ? 'SHOPPING BAG' : 'REMOVE CART'}</span>
            </Button>
          </Div>
        </Div>
      ) : (
        <></>
      )}
    </BrandHeaderWrapper>
  )
}

export default Footer
