import React, { MouseEvent, useEffect } from 'react'
import Image from 'next/image'
import tw from 'twin.macro'
import { Button } from '../../../commons/styles'
import {
  ModalBg,
  ModalCloseWrapper,
  ModalContents,
  ModalWrapper,
} from './index.styled'

interface IModalProps {
  children: JSX.Element[] | JSX.Element
  isActive: boolean
  buttonLabel: string
  onToggleActive: () => void
  isButton?: boolean
  onClick?: () => void
}

const Modal = ({
  children,
  onClick,
  isActive,
  onToggleActive,
  buttonLabel,
  isButton,
}: IModalProps) => {
  useEffect(() => {
    if (isActive) document.body.style.overflow = 'hidden'
  }, [isActive])

  return isActive ? (
    <ModalBg
      onClick={() => {
        onToggleActive()
        document.body.style.removeProperty('overflow')
      }}
    >
      <ModalWrapper
        onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <ModalCloseWrapper
          onClick={(e: MouseEvent<HTMLDivElement>) => {
            e.stopPropagation()
            onToggleActive()
            document.body.style.removeProperty('overflow')
          }}
        >
          <Image
            src="/ico/ic_cancel.svg"
            alt="cancel"
            width="24px"
            height="24px"
          />
        </ModalCloseWrapper>
        <ModalContents>{children}</ModalContents>
        {isButton && onClick && (
          <Button
            type="button"
            onClick={(e: MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation()
              onClick()
              onToggleActive()
              document.body.style.removeProperty('overflow')
            }}
            variant="default"
            isFilled
            css={tw`w-full py-[14px] rounded-lg bg-gray-300 outline-gray-300 hover:bg-black hover:outline-black transition-all duration-200`}
          >
            {buttonLabel}
          </Button>
        )}
      </ModalWrapper>
    </ModalBg>
  ) : null
}

export default Modal
