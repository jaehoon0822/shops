import { createUploadLink } from 'apollo-upload-client'
import { useRecoilValue } from 'recoil'
import { accessTokenState } from '../../../../commons/stores'

const UseUploadLink = () => {
  const accessToken = useRecoilValue(accessTokenState)
  const uploadLink = createUploadLink({
    uri: 'https://backend-practice.codebootcamp.co.kr/graphql',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  })

  return { uploadLink }
}

export default UseUploadLink
