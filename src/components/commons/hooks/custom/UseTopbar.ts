import UseIsLoggedIn from './UseIsLoggedIn'
import UseRoute from './UseRoute'

const UseTopbar = () => {
  const isLoggedIn = UseIsLoggedIn()
  const { push } = UseRoute()

  const onMoveLoginPage = () => {
    push('#')
  }

  const onMoveSignUpPage = () => {
    push('#')
  }

  const onMoveMainPage = () => {
    push('/')
  }

  return {
    isLoggedIn,
    onMoveLoginPage,
    onMoveSignUpPage,
    onMoveMainPage,
  }
}

export default UseTopbar
