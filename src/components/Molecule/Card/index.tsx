import Image from 'next/image'
import 'twin.macro'
import Link from 'next/link'
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
  id: string
  src: string
  emphasis: string
  price: number
  title: string
  desc: string
}

const Card = ({ id, src, emphasis, price, title, desc }: ICardProps) => {
  return (
    <Link href={`/Brand/${id}`}>
      <Div tw="cursor-pointer">
        <Div tw="flex-col">
          <Image
            src={
              src
                ? `https://storage.googleapis.com/${src}`
                : '/images/defaultImg.svg'
            }
            height="466px"
            width="348px"
            objectFit="contain"
            alt="CardImg"
          />
          <Div tw="flex-col items-start">
            <EmpasisWrapper tw="justify-start items-center">
              <EmphasisSpan>{emphasis}</EmphasisSpan>
              <PriceSpan>{price}</PriceSpan>
            </EmpasisWrapper>
            <DescWrapper tw="items-start justify-center">
              <TitleSpan>{title}</TitleSpan>
              <DescSpan>{desc}</DescSpan>
            </DescWrapper>
          </Div>
        </Div>
      </Div>
    </Link>
  )
}

export default Card
