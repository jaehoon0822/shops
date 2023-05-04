import React from 'react'
import 'twin.macro'
import { BrandHeaderWrapper } from '../index.style'
import { Button, Div, DividerX } from '../../../../commons/styles'

interface IFooterProps {
  isAdded: boolean
  onClickToggleCart: () => void
}

const Footer = ({ isAdded, onClickToggleCart }: IFooterProps) => {
  return (
    <BrandHeaderWrapper tw="mt-8">
      <DividerX h="1px" color="#c0c0c0" />
      <Div tw="mt-8">
        <Div>
          <Button variant="default" tw="w-full mx-2">
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
    </BrandHeaderWrapper>
  )
}

export default Footer
