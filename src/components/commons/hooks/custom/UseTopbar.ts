import { useSetRecoilState } from 'recoil'
import UseMutationLogoutUser from '../mutation/UseMutationLogoutUser'
import UseFetchUserLoggedIn from '../query/UseFetchUserLoggedIn'
import UseIsLoggedIn from './UseIsLoggedIn'
import UseRoute from './UseRoute'
import { accessTokenState } from '../../../../commons/stores'

const UseTopbar = () => {
  const { data } = UseFetchUserLoggedIn()
  const setAccessToken = useSetRecoilState(accessTokenState)
  const { logoutUser } = UseMutationLogoutUser()
  const { push } = UseRoute()
  const isLoggedIn = UseIsLoggedIn()
  const onClickLogout = () => {
    logoutUser()
    setAccessToken('')
    push('/')
  }
  return {
    isLoggedIn,
    onClickLogout,
    data,
  }
}

export default UseTopbar
