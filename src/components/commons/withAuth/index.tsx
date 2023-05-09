import ErrorPage from '../../../pages/Error'
import UseWithAuth from '../hooks/custom/UseWithAuth'

// eslint-disable-next-line react/display-name
const withAuth = (Component: any) => (props: any) => {
  const { isSignPage, isNotAuthPage, isSign, onMovePage } = UseWithAuth()

  if (isNotAuthPage) {
    if (!isSign) {
      return <Component {...props} />
    }
    if (isSignPage && isSign) {
      return (
        <ErrorPage
          btnLabel="메인페이지로 가기"
          title="이미 로그인 되었어요"
          onMovePage={onMovePage('/')}
        />
      )
    }
  }

  if (isSign) {
    return <Component {...props} />
  }

  return (
    <ErrorPage
      btnLabel="로그인 페이지로 가기"
      title="로그인되지 않았어요"
      onMovePage={onMovePage('/SignIn')}
    />
  )
}

export default withAuth
