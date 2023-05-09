import { useMemo } from 'react'
import UseRoute from './UseRoute'
import UseIsLoggedIn from './UseIsLoggedIn'

const UseLayout = () => {
  const { pathname } = UseRoute()
  const isLoggedIn = UseIsLoggedIn()
  const isMain = useMemo(() => pathname === '/', [pathname])
  const isBrandMain = useMemo(() => pathname === '/Brand/Main', [pathname])
  const isSignPage = useMemo(
    () => ['/signIn', '/signUp'].includes(pathname),
    [pathname],
  )
  return {
    isBrandMain,
    isSignPage,
    isLoggedIn,
    isMain,
  }
}

export default UseLayout
