import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
  Container,
  Heading,
  NavLink,
  NavLinkItem,
  NavLinkText,
  SiteTitle
} from './layout.styles'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <SiteTitle>{data.site.siteMetadata.title}</SiteTitle>
      <nav>
        <NavLink>
          <NavLinkItem>
            <NavLinkText to='/'>Home</NavLinkText>
          </NavLinkItem>
          <NavLinkItem>
            <NavLinkText to='/about'>About</NavLinkText>
          </NavLinkItem>
          <NavLinkItem>
            <NavLinkText to='/blog'>Blog</NavLinkText>
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
