import { useRecoilValue, useSetRecoilState } from 'recoil'
import UseMutationLogoutUser from '../mutation/UseMutationLogoutUser'
import UseFetchUserLoggedIn from '../query/UseFetchUserLoggedIn'
import UseIsLoggedIn from './UseIsLoggedIn'
import UseRoute from './UseRoute'
import { accessTokenState, cartItemsState } from '../../../../commons/stores'

const UseTopbar = () => {
  const cartItems = useRecoilValue(cartItemsState)
  const { data } = UseFetchUserLoggedIn()
  const setAccessToken = useSetRecoilState(accessTokenState)
  const { logoutUser, client } = UseMutationLogoutUser()
  const { push } = UseRoute()
  const isLoggedIn = UseIsLoggedIn()
  const onClickLogout = () => {
    logoutUser()
    setAccessToken('')
    client.resetStore()
    push('/')
  }

  return {
    isLoggedIn,
    onClickLogout,
    cartNumber: cartItems.length ?? 0,
    data,
  }
}

export default UseTopbar
