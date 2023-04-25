import { useRecoilValue } from 'recoil'
import { accessTokenState } from '../../../../commons/stores'

const UseIsLoggedIn = () => {
  const accessToken = useRecoilValue(accessTokenState)

  return accessToken !== ''
}

export default UseIsLoggedIn
