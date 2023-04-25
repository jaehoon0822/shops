import React from 'react'
import tw from 'twin.macro'
import { v4 as uuidv4 } from 'uuid'
import { Button, Div, Wrapper } from '../../../commons/styles'
import SignHeader from '../../Molecule/Sign/Header'
import Form from '../../Molecule/Form'
import Input from '../../Molecule/Input'
import UseSignIn from '../../commons/hooks/custom/UseSignIn'

const SignIn = () => {
  const { signInResolver, onSubmitSignIn, inputInfo } = UseSignIn()
  return (
    <Wrapper css={tw`flex-col`}>
      <SignHeader title="LOGIN" />
      <Div css={tw`w-1/2 flex-row pt-[174px] gap-x-4`}>
        <Form
          mode="onChange"
          resolver={signInResolver}
          onSubmit={onSubmitSignIn}
        >
          <Div css={tw`gap-x-4 h-full`}>
            <Div css={tw`flex-col gap-10`}>
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
            <Button variant="big" isFilled tw="items-center">
              로그인
            </Button>
          </Div>
        </Form>
      </Div>
    </Wrapper>
  )
}

export default SignIn
