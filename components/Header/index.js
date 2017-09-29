import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import HeaderLink from './components/HeaderLink'
import { Colors, Widths } from '../../utils/styles'

/**
 * Logo components
 */

const LogoImage = styled.img`
  display: flex;
  flex: 0 auto;
  height: 24px;
  min-width: 190px;
  margin: 0;
`

const LogoLink = styled.h1`
  display: flex;
  flex: 1 auto;
  flex-direction: row;
  align-items: center;
  padding: 0.5em 0.5em 0.5em 0em;
  margin: 0em;
  font-weight: 700;
  font-size: 1.5em;
  color: ${Colors.second} !important;
`

/**
 * Nav component
 */

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;

  @media (max-width: ${Widths.collapseColumns}) {
    flex-direction: column;
  }
`

/**
 * Header component
 */

const Header = styled.header`
  display: flex;
  flex: 1 auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  padding: 2em;
  max-width: 60em;
  margin: auto;

  @media (max-width: ${Widths.collapseColumns}) {
    flex-direction: column;
  }
`

export default props => (
  <Header {...props}>
    <Link href="/">
      <LogoLink>
        <img
          src="/static/logo.svg"
          style={{
            position: 'absolute',
            width: '48px',
            height: '48px',
            margin: '0em 1em 0em 0em',
            display: 'inline',
          }}
        />
        <span style={{ margin: '0em 0em 0em 72px' }}>Functional Foundry</span>
      </LogoLink>
    </Link>
    <Nav>
      <HeaderLink href="https://twitter.com/ffoundryhq" target="_">
        Let's talk @ffoundryhq
      </HeaderLink>
    </Nav>
  </Header>
)
