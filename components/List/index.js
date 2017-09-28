import styled from 'styled-components'

import { Colors, Widths } from '../../utils/styles'

export const Item = styled.li`margin: 0;`

export default styled.ul`
  margin-top: 1em;
  margin-bottom: 1em;

  @media (max-width: ${Widths.collapseLists}) {
    list-style: none;
    margin-left: 0em;
  }
`
