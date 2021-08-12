import styled from 'styled-components'
import { Link } from 'gatsby'

export const Container = styled.div`
  margin: auto;
  max-width: 500px;
  font-family: sans-serif;
`

export const Heading = styled.h1`
  color: rebeccapurple;
`

export const NavLink = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
`

export const NavLinkItem = styled.li`
  padding-right: 2rem;
`

export const NavLinkText = styled(Link)`
  color: black;
`

export const SiteTitle = styled.header`
  font-size: 3rem;
  color: gray;
  font-weight: 700;
  margin: 3rem 0;
`
