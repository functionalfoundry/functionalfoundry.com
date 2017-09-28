import styled from 'styled-components'

import LinkedInIcon from '../../static/iconmonstr-linkedin-3.svg'
import TwitterIcon from '../../static/iconmonstr-twitter-1.svg'
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

export const Photo = ({ url }) =>
  <PhotoContainer>
    <Image src={url} />
  </PhotoContainer>

export const Role = styled.div``

export const Skills = styled.div`
  opacity: 0.5;
  line-height: 26px;
`

export const Handles = styled.div`margin-top: 0.5em;`

const HandleLink = styled.a`
  margin-right: 0.6em;
  fill: ${Colors.third};
`

export const Handle = ({ type, url }) =>
  <HandleLink href={url} target="_">
    {type === 'twitter' ? <TwitterIcon /> : <LinkedInIcon />}
  </HandleLink>

export default styled.div`

`
