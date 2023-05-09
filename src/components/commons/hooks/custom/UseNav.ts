import UseRoute from './UseRoute'

const UseNav = () => {
  const navContents = [
    { label: 'BRAND', url: '/Brand/Main' },
    { label: 'CATEGORY', url: '/' },
    { label: 'LIFE', url: '/' },
    { label: 'BEATY', url: '/' },
  ]
  const navInfos = ['#STYLE', 'EVENT', 'BEST']
  const { pathname } = UseRoute()
  return {
    navContents,
    navInfos,
    pathname,
  }
}

export default UseNav
