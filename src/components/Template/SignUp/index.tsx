import React from 'react'
import tw from 'twin.macro'
import { v4 as uuidv4 } from 'uuid'
import { Button, Div, Wrapper } from '../../../commons/styles'
import SignHeader from '../../Molecule/Sign/Header'
import Form from '../../Molecule/Form'
import UseSignUp from '../../commons/hooks/custom/UseSignUp'
import Input from '../../Molecule/Input'

const SignUp = () => {
  const { inputInfo, signUpResolver, onSubmitSignUp } = UseSignUp()
  return (
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
            <Button variant="default" isFilled={false} tw="items-center mr-4">
              취소
            </Button>
            <Button variant="default" isFilled tw="items-center">
              로그인
            </Button>
          </Div>
        </Form>
      </Div>
    </Wrapper>
  )
}

export default SignUp
