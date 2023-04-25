import React, { Fragment } from 'react'
import { v4 as uuidv4 } from 'uuid'
import DaumPostcodeEmbed from 'react-daum-postcode'
import tw from 'twin.macro'
import Map from '../Map'
import { Button, Div } from '../../../commons/styles'
import { ContentsSpan } from '../../commons/layout/index.styled'
import Modal from '../Modal'
import UseAddress from '../../commons/hooks/custom/UseAddress'
import { AddressInput } from './index.styled'

interface IAddressProps {
  label: string
  inputs?: { name: string; placeholder: string; type: string }[]
}

const Address = ({ label, inputs }: IAddressProps) => {
  const { register, isActive, onToggleActive, onComplate } = UseAddress()

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
                  <AddressInput
                    tw="w-[88px]
                    py-[12px]
                    px-[18px]
                    outline-none
                    outline-2 
                    outline-[#e9e9e9] 
                    bg-transparent"
                    type={input.type}
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
                        onComplete={onComplate}
                        onClose={onToggleActive}
                      />
                    </Modal>
                  ) : null}
                </Div>
              ) : (
                <Div tw="flex-row justify-center mb-4 ">
                  <AddressInput
                    type={input.type}
                    tw="w-full
                    outline-none
                    bg-[#e9e9e9]"
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
