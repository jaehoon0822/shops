import { useMemo } from 'react'
import UseRoute from './UseRoute'

const UseLayout = () => {
  const { pathname } = UseRoute()
  console.log(pathname)
  const isMain = useMemo(() => pathname === '/', [pathname])
  const isSignPage = useMemo(
    () => ['/signIn', '/signUp'].includes(pathname),
    [pathname],
  )
  return {
    isSignPage,
    isMain,
  }
}

export default UseLayout
