import { ChangeEvent, MouseEvent, useRef, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import UseMutationUploadFile from '../mutation/UseMutationUploadFile'

const UseImageInput = () => {
  const {
    setValue,
    formState: { errors },
  } = useFormContext()
  const { uploadFile } = UseMutationUploadFile()
  const [currentId, setCurrentId] = useState<number>(-1)
  const [files, setFiles] = useState<string[]>([])
  const [fileUrls, setFileUrls] = useState<string[]>([])
  const UploadRef = useRef<HTMLInputElement | null>(null)

  const file2Url = (file: File) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      if (currentId !== -1) {
        setFileUrls((prev) => {
          const newArr = [...prev]
          newArr[currentId] = reader.result as string
          return newArr
        })
      } else {
        setFileUrls((prev) => [...prev, reader.result as string])
      }
    }
  }

  const onChangeUploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const targetFiles = e.target.files
    if (targetFiles !== null) {
      const { data } = await uploadFile({
        variables: {
          file: targetFiles[0],
        },
      })
      file2Url(targetFiles[0])
      const url = data?.uploadFile.url
      if (currentId !== -1) {
        setFiles((prev) => {
          const newArr = [...prev]
          if (url) newArr[currentId] = url
          return newArr
        })
      } else {
        setFiles((prev) => {
          if (url) {
            const newArr = [...prev, url]
            return newArr
          }
          return prev
        })
      }
      e.target.value = ''
    }
  }

  const onClickUploadImage = (idx: number) => () => {
    if (UploadRef.current !== null) {
      UploadRef.current?.click()
      setCurrentId(idx)
    }
  }

  const onClickClose = (idx: number) => (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setFiles((prev) => {
      const newArr = [...prev]
      newArr.splice(idx, 1)
      return newArr
    })
    setFileUrls((prev) => {
      const newArr = [...prev]
      newArr.splice(idx, 1)
      return newArr
    })
  }

  return {
    UploadRef,
    onChangeUploadImage,
    onClickUploadImage,
    onClickClose,
    fileUrls,
    files,
    errors,
    setValue,
  }
}

export default UseImageInput
