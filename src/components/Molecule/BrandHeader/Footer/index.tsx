import React from 'react'
import 'twin.macro'
import { BrandHeaderWrapper } from '../index.style'
import { Button, Div, DividerX } from '../../../../commons/styles'

const Footer = () => {
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
          <Button variant="default" tw="w-full mx-2">
            <span>SHOPPING BAG</span>
          </Button>
        </Div>
      </Div>
    </BrandHeaderWrapper>
  )
}

export default Footer
