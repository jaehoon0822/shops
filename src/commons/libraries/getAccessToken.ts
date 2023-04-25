import { gql, GraphQLClient } from 'graphql-request'
import { IMutation } from '../types/generated/types'

export const RESTORE_ACCESS_TOKEN = gql`
  mutation {
    restoreAccessToken {
      accessToken
    }
  }
`

const getAccessToken = async (): Promise<string | undefined> => {
  try {
    const graphqlClient = new GraphQLClient(
      'https://backend-practice.codebootcamp.co.kr/graphql',
      { credentials: 'include' },
    )
    const result = await graphqlClient.request<
      Pick<IMutation, 'restoreAccessToken'>
    >(RESTORE_ACCESS_TOKEN)

    const newAccessToken = result.restoreAccessToken.accessToken

    return newAccessToken
  } catch (err) {
    if (err instanceof Error) {
      // console.log(err)
    }
  }
}

export default getAccessToken
