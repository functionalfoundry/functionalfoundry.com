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

export const Handles = styled.div`margin-top: 0.5em;`

const HandleLink = styled.a`margin-right: 0.25em;`

const HandleImage = styled.img`margin: 0em;`

export const Handle = ({ type, url }) => (
  <HandleLink href={url}>
    <style jsx>{`
      svg {
        opacity: 0.8;
      }
    `}</style>
    <HandleImage
      src={
        type === 'twitter' ? (
          '/static/iconmonstr-twitter-1.svg'
        ) : (
          '/static/iconmonstr-linkedin-3.svg'
        )
      }
    />
  </HandleLink>
)

export default styled.div`

`
