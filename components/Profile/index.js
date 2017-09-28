import styled from 'styled-components'

import { Colors } from '../../utils/styles'

export const Name = styled.h3`
  font-weight: 500;
  margin: 0em;
  color: ${Colors.fourth};
`

const PhotoContainer = styled.div``

const Image = styled.img`
  width: 200px;
  height: auto;
  border-radius: 5px;
  margin: 0em;
`

export const Photo = ({ url }) => (
  <PhotoContainer>
    <Image src={url} />
  </PhotoContainer>
)

export const Role = styled.div``

export const Skills = styled.div`opacity: 0.5;`

export default styled.div`

`
