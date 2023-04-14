import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import ApolloSettings from '../components/commons/apollo'
import Layout from '../components/commons/layout'
import GlobalStyles from '../commons/styles/globalStyle'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSettings>
        <Layout>
          <GlobalStyles />
          <Component {...pageProps} />
        </Layout>
      </ApolloSettings>
    </RecoilRoot>
  )
}
