import { gql, useMutation } from '@apollo/client'
import {
  IMutation,
  IMutationCreateUserArgs,
} from '../../../../commons/types/generated/types'

const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
      name
      picture
      createdAt
      updatedAt
      deletedAt
    }
  }
`

const UseMutationCreateuser = () => {
  const [createUser] = useMutation<
    Pick<IMutation, 'createUser'>,
    IMutationCreateUserArgs
  >(CREATE_USER)
  return { createUser }
}

export default UseMutationCreateuser
