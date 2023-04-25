import React from 'react'
import 'twin.macro'
import { v4 as uuidv4 } from 'uuid'
import { Button, Div, DividerX, Wrapper } from '../../../commons/styles'
import { HeaderTitle, HeaderWrapper } from './index.styled'
import { ContentsWrapper } from '../../commons/layout/index.styled'
import Form from '../../Molecule/Form'
import Input from '../../Molecule/Input'
import UseRegistration from '../../commons/hooks/custom/UseRegistration'
import { Schema } from '../../../commons/validation/registration.yup'
import Editor from '../../Molecule/Editor'
import Address from '../../Molecule/Address'
import UploadImage from '../../Molecule/UploadImage'

interface IRegistrationProps {
  isEdit?: boolean
  defaultValue: Schema
}

const Registration = ({ defaultValue, isEdit }: IRegistrationProps) => {
  const { inputsInfo, resolver, onSubmitRegistration } = UseRegistration()

  return (
    <Wrapper tw="pt-24 flex-col">
      <HeaderWrapper>
        <HeaderTitle>{isEdit ? '상품 수정' : '상품 등록'}</HeaderTitle>
        <DividerX h="3px" color="#555" />
      </HeaderWrapper>
      <ContentsWrapper tw="w-[100%]">
        <Form
          mode="onChange"
          resolver={resolver}
          onSubmit={onSubmitRegistration}
          defaultValue={defaultValue}
        >
          <Div tw="flex-col">
            {inputsInfo.map((info) => {
              if (info.name === 'contents')
                return (
                  <Div tw="p-8 border-gray-300 border-b-[1px]" key={uuidv4()}>
                    <Editor
                      name={info.name}
                      label={info.label as string}
                      placeholder={info.placeholder as string}
                    />
                  </Div>
                )
              if (info.name === 'useditemAddress')
                return (
                  <Div
                    tw="p-8 border-gray-300 border-b-[1px] flex-col"
                    key={uuidv4()}
                  >
                    <Address
                      label={info.label as string}
                      inputs={info.inputs}
                    />
                  </Div>
                )
              if (info.name === 'images')
                return (
                  <Div
                    tw="p-8 border-gray-300 border-b-[1px] flex-col"
                    key={uuidv4()}
                  >
                    <UploadImage
                      name={info.name}
                      label={info.label as string}
                    />
                  </Div>
                )
              return (
                <Div tw="p-8 border-gray-300 border-t-[1px]" key={uuidv4()}>
                  <Input
                    name={info.name as string}
                    type={info.type}
                    label={info.label}
                    placeholder={info.placeholder}
                  />
                </Div>
              )
            })}
          </Div>
          <Div tw="justify-center">
            <Button type="button" isFilled={false}>
              취소
            </Button>
            <Button tw="ml-2">등록</Button>
          </Div>
        </Form>
      </ContentsWrapper>
    </Wrapper>
  )
}

export default Registration
