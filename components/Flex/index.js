import styled from 'styled-components'

import { Widths } from '../../utils/styles'

export const Column = styled.div`
  display: flex;
  flex: 1 auto;
  flex-direction: column;

  padding-left: 1em;
  padding-right: 1em;

  &:first-child {
    padding-left: 0em;
    padding-right: 2em;
  }

  &:last-child {
    padding-right: 0em;
    padding-left: 2em;
  }

  &:only-child {
    padding-right: 0em;
    padding-left: 0em;
  }

  @media (max-width: ${Widths.collapseColumns}) {
    margin-bottom: 2em;

    padding-left: 0em;
    padding-right: 0em;

    &:first-child {
      padding-left: 0em;
      padding-right: 0em;
    }

    &:last-child {
      padding-left: 0em;
      padding-right: 0em;
    }
  }
`

export const Row = styled.div`
  display: flex;
  flex: 1 auto;
  flex-direction: row;

  @media (max-width: ${Widths.collapseColumns}) {
    flex-direction: column;
  }
`
