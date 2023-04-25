import { gql, useMutation } from '@apollo/client'
import {
  IMutation,
  IMutationUploadFileArgs,
} from '../../../../commons/types/generated/types'

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      _id
      url
      size
      isUsed
      createdAt
      updatedAt
      deletedAt
    }
  }
`

const UseMutationUploadFile = () => {
  const [uploadFile] = useMutation<
    Pick<IMutation, 'uploadFile'>,
    IMutationUploadFileArgs
  >(UPLOAD_FILE)

  return { uploadFile }
}

export default UseMutationUploadFile
