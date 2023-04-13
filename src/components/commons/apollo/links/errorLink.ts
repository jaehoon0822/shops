import { fromPromise } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { useSetRecoilState } from 'recoil'
import getAccessToken from '../../../../commons/libraries/getAccessToken'
import { accessTokenState } from '../../../../commons/stores'

const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  const setAccessToken = useSetRecoilState(accessTokenState)
  if (graphQLErrors) {
    graphQLErrors?.forEach((err) => {
      if (err.extensions.code === 'UNAUTENTICATED') {
        return fromPromise(
          getAccessToken().then((newAccessToken) => {
            setAccessToken(newAccessToken ?? '')
            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`,
              },
            })
          }),
        ).flatMap(() => forward(operation))
      }
    })
  }
})

export default errorLink
