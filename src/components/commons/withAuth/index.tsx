import ErrorPage from '../../../pages/Error'
import UseWithAuth from '../hooks/custom/UseWithAuth'

// eslint-disable-next-line react/display-name
const withAuth = (Component: any) => (props: any) => {
  const { isSignPage, isNotAuthPage, isSign } = UseWithAuth()

  if (isSign) {
    return <Component {...props} />
  }

  if (isNotAuthPage) {
    if (!isSign) {
      return <Component {...props} />
    }
    if (isSignPage && isSign) {
      return <ErrorPage />
    }
  }
  return <ErrorPage />
}

export default withAuth
