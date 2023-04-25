import { useEffect, useState } from 'react'
import getAccessToken from '../../../../commons/libraries/getAccessToken'
import UseRoute from './UseRoute'

const UseWithAuth = () => {
  const [isSign, setIsSign] = useState<boolean>(false)

  const { pathname, push } = UseRoute()
  const onClickPath = () => {
    push('/signIn')
  }
  const isSignPage = ['/signIn', '/signUp'].includes(pathname)
  const isNotAuthPage = ['/', '/signIn', '/signUp'].includes(pathname)

  useEffect(() => {
    ;(async () => {
      const newAccessToken = await getAccessToken()
      if (newAccessToken == null) {
        setIsSign(false)
      } else {
        setIsSign(true)
      }
    })()
  }, [pathname])

  return {
    isSign,
    onClickPath,
    isSignPage,
    isNotAuthPage,
  }
}

export default UseWithAuth
