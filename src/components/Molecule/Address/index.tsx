import React, { Fragment } from 'react'
import { v4 as uuidv4 } from 'uuid'
import DaumPostcodeEmbed from 'react-daum-postcode'
import tw from 'twin.macro'
import Map from '../Map'
import { Button, Div } from '../../../commons/styles'
import { ContentsSpan } from '../../commons/layout/index.styled'
import Modal from '../Modal'
import UseAddress from '../../commons/hooks/custom/UseAddress'

interface IAddressProps {
  label: string
  inputs?: { name: string; placeholder: string }[]
}

const Address = ({ label, inputs }: IAddressProps) => {
  const { register, isActive, onToggleActive, onComplate, AddRef } =
    UseAddress()

  return (
    <Div tw="flex-col items-start">
      <ContentsSpan
        css={tw`block whitespace-nowrap w-[113px] text-left pr-32 font-bold mb-[38px]`}
      >
        {label}
      </ContentsSpan>
      <Div tw="flex-row items-center justify-start">
        <Map w="500px" h="252px" />
        <Div tw="flex-col justify-center items-start">
          {inputs?.map((input, idx) => (
            <Fragment key={uuidv4()}>
              {idx === 0 ? (
                <Div tw="flex-row justify-start mb-4 items-center">
                  <input
                    tw="ml-[46px]
                    w-[88px]
                    h-[52px]
                    py-[21px]
                    px-[18px]
                    mr-[16px]
                    outline-none
                    border-2 border-[#e9e9e9] border-solid  bg-transparent"
                    placeholder={input.placeholder}
                    {...register(input.name)}
                  />
                  <Button onClick={onToggleActive} variant="small">
                    우편번호 검색
                  </Button>
                  {isActive ? (
                    <Modal
                      isActive={isActive}
                      onToggleActive={onToggleActive}
                      buttonLabel="우편번호 검색"
                    >
                      <DaumPostcodeEmbed
                        ref={AddRef}
                        onComplete={onComplate}
                        onClose={onToggleActive}
                      />
                    </Modal>
                  ) : null}
                </Div>
              ) : (
                <Div tw="flex-row justify-center mb-4 ">
                  <input
                    tw="w-full
                    bg-[#e9e9e9]
                    ml-[46px]
                    py-[21px]
                    outline-none
                    px-[18px]"
                    {...register(input.name)}
                  />
                </Div>
              )}
            </Fragment>
          ))}
        </Div>
      </Div>
    </Div>
  )
}

export default Address
