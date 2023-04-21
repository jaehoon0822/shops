import React from 'react'
import tw from 'twin.macro'
import { v4 as uuidv4 } from 'uuid'
import { Button, Div, Wrapper } from '../../../commons/styles'
import SignHeader from '../../Molecule/Sign/Header'
import Form from '../../Molecule/Form'
import UseSignUp from '../../commons/hooks/custom/UseSignUp'
import Input from '../../Molecule/Input'
import UseMovePage from '../../commons/hooks/custom/UseMovePage'
import Modal from '../../Molecule/Modal'

const SignUp = () => {
  const { onMovePage } = UseMovePage()
  const {
    inputInfo,
    signUpResolver,
    onSubmitSignUp,
    errorMessage,
    isActive,
    onToogleActive,
  } = UseSignUp()

  return (
    <>
      <Wrapper css={tw`flex-col`}>
        <SignHeader title="SIGNUP" />
        <Div css={tw`w-full flex-row py-10`}>
          <Form
            mode="onChange"
            resolver={signUpResolver}
            onSubmit={onSubmitSignUp}
          >
            <Div tw="w-full border-b-4 border-black border-solid mb-10">
              <Div css={tw`w-1/2 flex-col gap-10 pb-10`}>
                {inputInfo.map((info) => (
                  <Input
                    key={uuidv4()}
                    label={info.label}
                    name={info.name}
                    placeholder={info.placeholder}
                    type={info.type}
                  />
                ))}
              </Div>
            </Div>
            <Div css={tw`justify-center`}>
              <Button
                type="button"
                variant="default"
                isFilled={false}
                tw="items-center mr-6"
                onClick={onMovePage('/')}
              >
                취소
              </Button>
              <Button variant="default" isFilled tw="items-center">
                확인
              </Button>
            </Div>
          </Form>
        </Div>
      </Wrapper>
      {isActive ? (
        <Modal
          isActive={isActive}
          onToggleActive={onToogleActive}
          onClick={onToogleActive}
          buttonLabel="회원가입으로 돌아가기"
        >
          <span tw="text-red-400 font-bold">{errorMessage}</span>
        </Modal>
      ) : null}
    </>
  )
}

export default SignUp
