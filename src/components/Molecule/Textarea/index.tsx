import React from 'react'
import 'twin.macro'
import { Button, Div } from '../../../commons/styles'
import UseTextarea from '../../commons/hooks/custom/UseTextarea'

interface ITextareaProps {
  isComment?: boolean
  isEdit?: boolean
  name: string
  onSubmit: ((data: any) => Promise<void>) | ((data: any) => void)
  defaultValues?: { [x: string]: any }
  onClick?: () => void
}

const Textarea = ({
  name,
  onClick,
  onSubmit,
  isEdit,
  isComment,
  defaultValues,
}: ITextareaProps) => {
  const { FormProvider, useForm } = UseTextarea()
  const method = useForm({
    mode: 'onChange',
    defaultValues,
  })
  return (
    <Div tw="h-fit pb-[71px]">
      <FormProvider {...method}>
        <form
          tw="w-full"
          onSubmit={method.handleSubmit((data) => {
            onSubmit(data)
            method.reset()
          })}
        >
          <Div>
            <textarea
              {...method.register(name)}
              tw="bg-gray-200 w-full h-[231px] p-10 outline-none resize-none"
            />
          </Div>
          <Div tw="justify-end mt-4">
            {isComment ? (
              <Button type="button" onClick={onClick}>
                취소하기
              </Button>
            ) : null}
            <Button tw="ml-4">{isEdit ? '수정하기' : '작성하기'}</Button>
          </Div>
          <Div>
            <span>{method.formState.errors?.[name]?.message}</span>
          </Div>
        </form>
      </FormProvider>
    </Div>
  )
}

export default Textarea
