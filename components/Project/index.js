import styled from 'styled-components'
import { Colors } from '../../utils/styles'

export const Name = styled.h3`
  font-weight: 500;
  margin: 0em;
  color: ${Colors.fourth};
`

const PhotoContainer = styled.div``

const Image = styled.img`
  width: 450px;
  height: auto;
  margin: 0em;
`

export default ({ url }) => (
  <PhotoContainer>
    <Image src={url} />
  </PhotoContainer>
)
