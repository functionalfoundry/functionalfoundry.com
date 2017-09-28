import styled from 'styled-components'

import { Colors, Widths } from '../../../utils/styles'

export default styled.a`
  display: flex;
  flex: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5em 0em;
  margin-left: 2em;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${Colors.third} !important;
  }

  @media (max-width: ${Widths.collapseColumns}) {
    margin: 0;
  }
`
