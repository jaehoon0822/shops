import UseRoute from './UseRoute'

const UseMovePage = () => {
  const { push } = UseRoute()
  const onMovePage = (path: string) => () => {
    push(path)
  }
  return {
    onMovePage,
  }
}

export default UseMovePage
