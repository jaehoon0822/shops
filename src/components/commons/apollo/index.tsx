import React, { useEffect } from 'react'
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from '@apollo/client'
import { accessTokenState, refreshTokenLoadable } from '../../../commons/stores'
import UseErrorLink from './links/UseErrorLink'
import UseUploadLink from './links/UseUploadLink'

const cachedMemory = new InMemoryCache()

interface ApolloSettingsProps {
  children: React.ReactChild
}

const ApolloSettings = ({ children }: ApolloSettingsProps) => {
  const setAccessToken = useSetRecoilState(accessTokenState)
  const getAccessTokenLodable = useRecoilValueLoadable(refreshTokenLoadable)
  const { errorLink } = UseErrorLink()
  const { uploadLink } = UseUploadLink()

  useEffect(() => {
    void getAccessTokenLodable.toPromise().then((newAccessToken) => {
      setAccessToken(newAccessToken ?? '')
    })
  }, [])

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: cachedMemory,
  })

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default ApolloSettings
