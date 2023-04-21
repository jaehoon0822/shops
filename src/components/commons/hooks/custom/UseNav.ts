import UseRoute from './UseRoute'

const UseNav = () => {
  const navContents = ['BRAND', 'CATEGORY', 'LIFE', 'BEATY']
  const navInfos = ['#STYLE', 'EVENT', 'BEST']
  const { pathname } = UseRoute()
  return {
    navContents,
    navInfos,
    pathname,
  }
}

export default UseNav
