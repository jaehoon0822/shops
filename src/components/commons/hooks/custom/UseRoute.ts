import { useRouter } from 'next/router'

const UseRoute = () => {
  const { push, query, back, pathname } = useRouter()
  return { push, query, back, pathname }
}

export default UseRoute
