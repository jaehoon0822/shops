import React from 'react'
import 'twin.macro'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'
import { Button, Div, DividerX, Wrapper } from '../../../commons/styles'
import { HeaderTitle, HeaderWrapper } from './index.styled'
import { ContentsWrapper } from '../../commons/layout/index.styled'
import Form from '../../Molecule/Form'
import Input from '../../Molecule/Input'
import UseRegistration from '../../commons/hooks/custom/UseRegistration'
// import { Schema } from '../../../commons/validation/registration.yup'
import Editor from '../../Molecule/Editor'
import Address from '../../Molecule/Address'
import UploadImage from '../../Molecule/UploadImage'
import {
  ICreateUseditemInput,
  IUseditem,
} from '../../../commons/types/generated/types'

interface IRegistrationProps {
  isEdit?: boolean
  defaultValue?:
    | (ICreateUseditemInput & { [key: string]: any })
    | (IUseditem & { [key: string]: any })
}

const Registration = ({ defaultValue, isEdit }: IRegistrationProps) => {
  const { inputsInfo, resolver, onSubmitRegistration, onSubmitEdit } =
    UseRegistration(defaultValue?._id)

  return (
    <Wrapper tw="pt-24 flex-col w-[1270px]">
      <HeaderWrapper>
        <HeaderTitle>{isEdit ? '상품 수정' : '상품 등록'}</HeaderTitle>
        <DividerX h="3px" color="#555" />
      </HeaderWrapper>
      <ContentsWrapper tw="w-[100%]">
        <Form
          mode="onChange"
          resolver={resolver}
          onSubmit={isEdit ? onSubmitEdit : onSubmitRegistration}
        >
          <Div tw="flex-col mb-12">
            {inputsInfo.map((info) => {
              if (info.name === 'contents')
                return (
                  <Div tw="p-8 border-gray-300 border-b-[1px]" key={uuidv4()}>
                    <Editor
                      name={info.name}
                      label={info.label as string}
                      placeholder={info.placeholder as string}
                      defaultValue={defaultValue?.contents}
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
                      defaultValue={defaultValue?.useditemAddress ?? undefined}
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
                      defaultValue={defaultValue?.images ?? undefined}
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
                    defaultValue={
                      info.name === 'tags'
                        ? defaultValue?.[info.name]?.join(' ')
                        : defaultValue?.[info.name]
                    }
                  />
                </Div>
              )
            })}
          </Div>
          <Div tw="justify-center">
            <Link href="/Brand/Main">
              <Button type="button" isFilled={false}>
                취소
              </Button>
            </Link>
            <Button type="submit" tw="ml-2">
              {isEdit ? '수정' : '등록'}
            </Button>
          </Div>
        </Form>
      </ContentsWrapper>
    </Wrapper>
  )
}

export default Registration
