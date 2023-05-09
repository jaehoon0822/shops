import { useRouter } from 'next/router'

const UseRoute = () => {
  const { push, query, back, pathname, reload } = useRouter()
  return { push, query, back, pathname, reload }
}

export default UseRoute
