import tw from 'twin.macro'
import Nav from './nav'
import Topbar from './topbar'
import UseLayout from '../hooks/custom/UseLayout'
import Footer from './footer'
import { Container } from '../../../commons/styles'

const Layout = ({ children }: { children: JSX.Element[] }): JSX.Element => {
  const { isSignPage } = UseLayout()
  return (
    <>
      {!isSignPage ? <Topbar /> : null}
      <Nav isSignPage={isSignPage} />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

export default Layout
