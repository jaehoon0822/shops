import React from 'react'
import Image from 'next/image'
import { Div } from '../../../commons/styles'
import {
  DescSpan,
  DescWrapper,
  EmpasisWrapper,
  EmphasisSpan,
  PriceSpan,
  TitleSpan,
} from './index.styled'

interface ICardProps {
  src: string
  emphasis: string
  price: string
  title: string
  desc: string
}

const Card = ({ src, emphasis, price, title, desc }: ICardProps) => {
  return (
    <Div>
      <Div>
        <Image src={src} height={348} width={466} alt="CardImg" />
        <Div>
          <EmpasisWrapper>
            <EmphasisSpan>{emphasis}</EmphasisSpan>
            <PriceSpan>{price}</PriceSpan>
          </EmpasisWrapper>
          <DescWrapper>
            <TitleSpan>{title}</TitleSpan>
            <DescSpan>{desc}</DescSpan>
          </DescWrapper>
        </Div>
      </Div>
    </Div>
  )
}

export default Card
