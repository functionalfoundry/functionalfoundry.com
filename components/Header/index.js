import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { Colors, Widths } from '../../utils/styles'

/**
 * Logo components
 */

const Logo = styled.h1`
  display: flex;
  flex-basis: auto;
  flex-shrink: 0;
  align-items: center;
  margin: 0em;
`

const Title = styled.div`
  flex-basis: auto;
  flex-shrink: 0;
  font-weight: 700;
  font-size: 1.5em;
  color: ${Colors.second} !important;
`

const TitleContainer = styled.div`
  align-items: center;
  display: flex;
  flex-basis: auto;
  flex-direction: row;
  @media (max-width: $(Widths.collapseColumns)) {
    flex-basis: 100%;
  }
`

/**
 * Header component
 */

const Header = styled.header`
  align-items: center;
  display: flex;
  flex: 1 auto;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  padding: 2em;
  max-width: 60em;
  margin: 0.5em auto 0;
  @media (max-width: ${Widths.collapseColumns}) {
    justify-content: flex-start;
  }
`

const TwitterLink = styled.a`
  align-items: center;
  display: block;
  padding: 0.5em 0em;
  margin-left: 2em;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${Colors.third} !important;
  }

  @media (max-width: ${Widths.collapseColumns}) {
    margin: 0;
    flex-basis: 100%;
    padding-left: 78px;
  }
`

export default props => (
  <Header {...props}>
    <TitleContainer>
      <Logo>
        <img
          src="/static/logo.svg"
          style={{
            width: '48px',
            height: '48px',
            margin: '0em 1em 0em 0em',
            display: 'inline',
          }}
        />
      </Logo>
      <Title>Functional Foundry </Title>
    </TitleContainer>
    <TwitterLink href="https://twitter.com/ffoundryhq" target="_">
      Let's talk @ffoundryhq
    </TwitterLink>
  </Header>
)
