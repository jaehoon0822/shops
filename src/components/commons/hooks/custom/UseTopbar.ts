import UseFetchUserLoggedIn from '../query/UseFetchUserLoggedIn'
import UseIsLoggedIn from './UseIsLoggedIn'

const UseTopbar = () => {
  const { data } = UseFetchUserLoggedIn()
  const isLoggedIn = UseIsLoggedIn()
  return {
    isLoggedIn,
    data,
  }
}

export default UseTopbar
