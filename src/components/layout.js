import React from 'react'
import { Link } from 'gatsby'
import {
  Container,
  Heading,
  NavLink,
  NavLinkItem,
  NavLinkText
} from './layout.styles'

const Layout = ({ pageTitle, children }) => {
  return (
    <Container>
      <nav>
        <NavLink>
          <NavLinkItem>
            <NavLinkText to='/'>Home</NavLinkText>
          </NavLinkItem>
          <NavLinkItem>
            <NavLinkText to='/about'>About</NavLinkText>
          </NavLinkItem>
        </NavLink>
      </nav>
      <main>
        <Heading>{pageTitle}</Heading>
        {children}
      </main>
    </Container>
  )
}

export default Layout
