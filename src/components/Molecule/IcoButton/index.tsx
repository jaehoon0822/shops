import Image from 'next/image'
import { css } from 'twin.macro'
import { Div } from '../../../commons/styles'

interface IIcoButtonProps {
  w: string
  h: string
  src: string
  alt: string
  onClick: (() => Promise<void>) | (() => void)
}

const IcoButton = ({ w, h, src, alt, onClick }: IIcoButtonProps) => {
  return (
    <Div
      css={css`
        width: ${w};
        height: ${h};
      `}
    >
      <button type="button" onClick={onClick}>
        <Image src={src} width={w} height={h} alt={alt} />
      </button>
    </Div>
  )
}

export default IcoButton
