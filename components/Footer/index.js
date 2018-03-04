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

const Address = styled.div`
  display: flex;
  flex: 1 auto;
  flex-direction: row;

  strong:first-child {
    width: 5em;
  }

  span:nth-child(n + 1):before {
    content: ', ';
  }

  span:nth-child(2):before {
    content: '';
  }

  @media (max-width: ${Widths.collapseLists}) {
    margin-top: 2em;
    flex-direction: column;

    span:nth-child(n):before {
      content: '';
    }
  }
`

const AddressesColumn = styled(Column)`
  @media (max-width: ${Widths.collapseColumns}) {
    margin-top: -2em;
  }

  @media (max-width: ${Widths.collapseLists}) {
    margin-top: -2em;
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
      <Column style={{ flex: '0.33 auto', paddingRight: '4em' }}>
        <List style={{ listStyle: 'none' }}>
          <Item style={{ color: Colors.second, fontWeight: '700' }}>
            Functional Foundry, LLC
          </Item>
          <Item>
            <a href="https://linkedin.com/companies/functionalfoundry" target="_">
              LinkedIn
            </a>
          </Item>
          <Item>
            <a href="https://twitter.com/ffoundryhq" target="_">
              Twitter
            </a>
          </Item>
          <Item>
            <a href="https://github.com/functionalfoundry" target="_">
              GitHub
            </a>
          </Item>
        </List>
      </Column>
      <AddressesColumn style={{ flex: '0.33 auto' }}>
        <List style={{ listStyle: 'none' }}>
          <Item>
            <strong>United States</strong>
            <br />
            543 Howard Street<br />
            San Francisco<br />
            CA 94105
          </Item>
        </List>
      </AddressesColumn>
    </Inner>
  </Container>
)
