import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import ApolloSettings from '../components/commons/apollo'
import Layout from '../components/commons/layout'
import GlobalStyles from '../commons/styles/globalStyle'
import withAuth from '../components/commons/withAuth'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSettings>
        <Layout>
          <GlobalStyles />
          {withAuth(Component)(pageProps)}
        </Layout>
      </ApolloSettings>
    </RecoilRoot>
  )
}
