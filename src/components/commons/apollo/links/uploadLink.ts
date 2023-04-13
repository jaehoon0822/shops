import { createUploadLink } from 'apollo-upload-client'

const uploadLink = createUploadLink({
  uri: 'http://backend-practice.codebootcamp.co.kr/graphql',
  headers: {
    Authorization: 'Bearer',
    credentials: 'include',
  },
})

export default uploadLink
