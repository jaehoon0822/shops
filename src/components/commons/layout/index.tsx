import 'twin.macro'
import Image from 'next/image'
import Nav from './nav'
import Topbar from './topbar'
import UseLayout from '../hooks/custom/UseLayout'
import Footer from './footer'
import { Container } from '../../../commons/styles'
import Carousel from '../../Molecule/Carousel'

const Layout = ({ children }: { children: JSX.Element[] }): JSX.Element => {
  const { isSignPage, isMain } = UseLayout()
  return (
    <>
      {!isSignPage ? <Topbar /> : null}
      <Nav isSignPage={isSignPage} />
      {isMain ? (
        <Carousel>
          <Image
            src="https://images.unsplash.com/photo-1533195925550-d1229db43cf2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            layout="fill"
            objectFit="cover"
            alt="img"
          />
          <Image
            src="https://images.unsplash.com/photo-1611099144078-5596e87ef54c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            layout="fill"
            objectFit="cover"
            alt="img"
          />
          <Image
            src="https://images.unsplash.com/photo-1613063020776-2497a693d583?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            layout="fill"
            objectFit="cover"
            alt="img"
          />
        </Carousel>
      ) : null}
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

export default Layout
