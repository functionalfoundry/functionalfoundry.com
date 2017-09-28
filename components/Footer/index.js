import styled from 'styled-components'

import { Column, Row } from '../Flex'
import List, { Item } from '../List'
import { Colors, Widths } from '../../utils/styles'

const Container = styled.div`
  margin-top: 2em;
  background-color: ${Colors.first};
`

const Inner = styled(Row)`
  max-width: 60em;
  margin: auto;
  padding: 2em 0em;
  color: ${Colors.fifth};
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: ${Widths.collapseLists}) {
    padding: 2em 2em;
  }
`

export default props => (
  <Container {...props}>
    <style jsx>
      {`
        a {
          color: ${Colors.fifth};
        }

        a:hover {
          color: white;
        }

        strong {
          font-weight: 600;
        }
      `}
    </style>
    <Inner>
      <Column style={{ flex: '0 auto', paddingRight: '4em' }}>
        <List style={{ listStyle: 'none' }}>
          <Item style={{ color: Colors.second, fontWeight: '700' }}>
            Functional Foundry
          </Item>
          <Item>
            <a href="https://linkedin.com/companies/functionalfoundry">LinkedIn</a>
          </Item>
          <Item>
            <a href="https://twitter.com/ffoundryhq">Twitter</a>
          </Item>
        </List>
      </Column>
      <Column style={{ flex: '0 auto' }}>
        <List style={{ listStyle: 'none' }}>
          <Item style={{ marginBottom: '2em' }}>
            <strong>US</strong>
            <br />
            543 Howard Street<br />San Francisco<br />CA 94105
          </Item>
          <Item style={{ marginBottom: '0em' }}>
            <strong>Germany</strong>
            <br />
            Glockengießerstr. 13<br />D-23552 Lübeck
          </Item>
        </List>
      </Column>
    </Inner>
  </Container>
)
