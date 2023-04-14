import React from 'react'
import Nav from './nav'
import Topbar from './topbar'
import UseLayout from '../hooks/custom/UseLayout'
import Footer from './footer'

const Layout = ({ children }: { children: JSX.Element[] }): JSX.Element => {
  const { isSignPage } = UseLayout()
  return (
    <>
      {!isSignPage ? <Topbar /> : null}
      <Nav isSignPage={isSignPage} />
      <div>{children}</div>
      <Footer />
    </>
  )
}

export default Layout
