import styled from 'styled-components'

import { Colors } from '../../utils/styles'

const GetInTouchContainer = styled.div`text-align: center;`

const GetInTouchButton = styled.a`
  display: inline-block;
  box-sizing: border-box;
  background: ${Colors.second};
  color: white !important;
  padding: 1em 2em;
  border-radius: 5px;
  font-size: 1.25em;
  font-weight: 500;
  transition: background-color 0.15s;

  &:hover {
    background-color: ${Colors.secondDarker};
  }
`

export default () => (
  <GetInTouchContainer>
    <GetInTouchButton href="mailto:">Get in touch</GetInTouchButton>
  </GetInTouchContainer>
)
