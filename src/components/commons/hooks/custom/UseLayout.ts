import { useMemo } from 'react'
import UseRoute from './UseRoute'

const UseLayout = () => {
  const { pathname } = UseRoute()
  const isSignPage = useMemo(
    () => ['/login', '/join'].includes(pathname),
    [pathname],
  )
  return {
    isSignPage,
  }
}

export default UseLayout
