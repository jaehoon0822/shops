import React, { memo, useMemo } from 'react'
import dynamic from 'next/dynamic'
import tw from 'twin.macro'
import { Controller, useFormContext } from 'react-hook-form'
import 'react-quill/dist/quill.snow.css'
import { Div } from '../../../commons/styles'
import { ContentsSpan } from '../../commons/layout/index.styled'

interface IEditorProps {
  name: string
  label: string
  placeholder: string
  defaultValue?: string
}

const Editor = ({ name, label, placeholder, defaultValue }: IEditorProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext()
  const ReactQuill = useMemo(
    () => dynamic(() => import('react-quill'), { ssr: false }),
    [],
  )

  return (
    <Div tw="relative items-start">
      <ContentsSpan
        css={tw`block whitespace-nowrap w-[113px] text-left pr-32 font-bold`}
      >
        {label}
      </ContentsSpan>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue ?? ''}
        render={({ field }) => (
          <ReactQuill
            {...field}
            placeholder={placeholder}
            onChange={(value) => {
              field.onChange(value === '<p><br></p>' ? '' : value)
            }}
            style={{
              width: '100%',
              height: '431px',
              marginBottom: '42px',
            }}
          />
        )}
      />
      <Div tw="absolute bottom-[-32px] left-36 text-red-400">
        <span>{errors[name]?.message ?? null}</span>
      </Div>
    </Div>
  )
}

export default memo(Editor)
