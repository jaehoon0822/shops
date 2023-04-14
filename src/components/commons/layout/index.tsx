import React from 'react'
import tw from 'twin.macro'

const Layout = ({ children }: { children: JSX.Element[] }): JSX.Element => (
  <div css={tw`bg-red-50`}>{children}</div>
)

export default Layout
