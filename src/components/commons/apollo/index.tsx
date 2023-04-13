import React, { useEffect } from 'react'
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from '@apollo/client'
import { accessTokenState, refreshTokenLoadable } from '../../../commons/stores'
import uploadLink from './links/uploadLink'
import errorLink from './links/errorLink'

const cachedMemory = new InMemoryCache()

interface ApolloSettingsProps {
  children: React.ReactChild
}

const ApolloSettings = ({ children }: ApolloSettingsProps) => {
  const setTokenState = useSetRecoilState(accessTokenState)
  const getAccessTokenLodable = useRecoilValueLoadable(refreshTokenLoadable)

  useEffect(() => {
    getAccessTokenLodable.toPromise().then((newAccessToken) => {
      setTokenState(newAccessToken ?? '')
    })
  }, [])

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: cachedMemory,
  })

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default ApolloSettings
