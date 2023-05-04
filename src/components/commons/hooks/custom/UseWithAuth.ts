import { useEffect, useState } from 'react'
import getAccessToken from '../../../../commons/libraries/getAccessToken'
import UseRoute from './UseRoute'
import UseMovePage from './UseMovePage'

const UseWithAuth = () => {
  const [isSign, setIsSign] = useState<boolean>(false)
  const { onMovePage } = UseMovePage()

  const { pathname, push } = UseRoute()
  const onClickPath = () => {
    push('/SignIn')
  }
  const isSignPage = ['/SignIn', '/SignUp'].includes(pathname)
  const isNotAuthPage = ['/', '/SignIn', '/SignUp'].includes(pathname)

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
    onMovePage,
  }
}

export default UseWithAuth
