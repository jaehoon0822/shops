import { useMemo } from 'react'
import UseRoute from './UseRoute'

const UseLayout = () => {
  const { pathname } = UseRoute()
  const isSignPage = useMemo(
    () => ['/signIn', '/signUp'].includes(pathname),
    [pathname],
  )
  return {
    isSignPage,
  }
}

export default UseLayout
