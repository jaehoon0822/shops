import tw from 'twin.macro'
import Image from 'next/image'
import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Div } from '../../../commons/styles'
import { ContentsSpan } from '../../commons/layout/index.styled'
import { UploadBox, UploadBoxSpan, UploadImageInput } from './index.styled'
import UseImageInput from '../../commons/hooks/custom/UseImageInput'

interface IUploadImageProps {
  label: string
  name: string
  defaultValue?: string[]
}

const UploadImage = ({ label, name, defaultValue }: IUploadImageProps) => {
  const {
    UploadRef,
    onChangeUploadImage,
    onClickUploadImage,
    onClickClose,
    fileUrls,
    files,
    errors,
    setValue,
  } = UseImageInput(defaultValue)

  useEffect(() => {
    setValue('images', files)
  }, [files, setValue])

  return (
    <Div tw="items-start flex-col">
      <ContentsSpan
        css={tw`block whitespace-nowrap w-[113px] text-left pr-32 font-bold pb-8`}
      >
        {label}
      </ContentsSpan>
      <Div>
        <UploadImageInput
          onChange={onChangeUploadImage}
          type="file"
          name={name}
          ref={UploadRef}
        />
        <Div tw="justify-start">
          {fileUrls.map((file, idx) => (
            <UploadBox
              key={uuidv4()}
              onClick={onClickUploadImage(idx)}
              id={idx.toString()}
              tw="ml-4 first-of-type:(ml-0)"
              css={{
                backgroundColor: file ? 'transparent' : '#bdbdbd',
              }}
            >
              {file === undefined ? (
                <>
                  <UploadBoxSpan>+</UploadBoxSpan>
                  <UploadBoxSpan>Upload</UploadBoxSpan>
                </>
              ) : (
                <Div tw="w-full h-full relative justify-center items-center">
                  <Div
                    tw="w-[24px] absolute top-1 right-1"
                    onClick={onClickClose(idx)}
                  >
                    <Image
                      src="/ico/ic_cancel.svg"
                      width={24}
                      height={24}
                      alt="close"
                    />
                  </Div>
                  <Image
                    src={
                      file.startsWith('codecamp-file-storage')
                        ? `https://storage.googleapis.com/${file}`
                        : file
                    }
                    height="100%"
                    width="100%"
                    alt="images"
                  />
                </Div>
              )}
            </UploadBox>
          ))}
          {fileUrls.length < 3 ? (
            <UploadBox
              key={uuidv4()}
              onClick={onClickUploadImage(-1)}
              tw="ml-4 first-of-type:(ml-0)"
            >
              <UploadBoxSpan>+</UploadBoxSpan>
              <UploadBoxSpan>Upload</UploadBoxSpan>
            </UploadBox>
          ) : null}
          <Div tw="absolute top-16 left-36 text-red-400">
            <span>{errors.images?.message ?? null}</span>
          </Div>
        </Div>
      </Div>
    </Div>
  )
}

export default UploadImage
