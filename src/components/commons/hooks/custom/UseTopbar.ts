import UseIsLoggedIn from './UseIsLoggedIn'

const UseTopbar = () => {
  const isLoggedIn = UseIsLoggedIn()
  return {
    isLoggedIn,
  }
}

export default UseTopbar
