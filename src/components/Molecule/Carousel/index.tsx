import React, { Children, useEffect, useMemo } from 'react'
import { v4 as uuidv4 } from 'uuid'
import {
  CarouselContent,
  CarouselWrapper,
  Dot,
  DotWrapper,
} from './index.styled'
import UseCarousel from '../../commons/hooks/custom/UseCarousel'

interface ICarouselProps {
  children: React.ReactNode
  sec?: number
}

const Carousel = ({ children, sec }: ICarouselProps) => {
  const { idx, setIdx, onClickDot } = UseCarousel()
  const len = Children.count(children)

  useEffect(() => {
    const clear = setTimeout(() => {
      setIdx((prev) => (prev + 1) % len)
    }, sec ?? 3000)
    return () => clearTimeout(clear)
  }, [idx, setIdx, len, sec])

  return (
    <CarouselWrapper>
      {Children.map(children, (child) => (
        <CarouselContent
          css={{
            transform: `translate(-${idx}00%)`,
          }}
        >
          {child}
        </CarouselContent>
      ))}
      <DotWrapper>
        {useMemo(
          () =>
            new Array(len).fill(1).map((_, index) => (
              <Dot
                key={uuidv4()}
                css={{
                  backgroundColor: `${idx === index ? '#fff' : '#000'}`,
                  opacity: `${idx === index ? '1' : '0.5'}`,
                }}
                onClick={onClickDot(index)}
              />
            )),
          [len, idx, onClickDot],
        )}
      </DotWrapper>
    </CarouselWrapper>
  )
}

export default Carousel
