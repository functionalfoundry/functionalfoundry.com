import styled from 'styled-components'

import App from '../components/App'
import Divider from '../components/Divider'
import { Column, Row } from '../components/Flex'
import List, { Item } from '../components/List'
import Section, { Header, Content } from '../components/Section'
import Profile, {
  Name,
  Photo,
  Role,
  Skills,
  Handles,
  Handle,
} from '../components/Profile'

const About = styled.div`font-size: 1.5em;`

const LogoContainer = styled.div`
  display: flex;
  flex: 1 auto;
  flex-direction: row;
  justify-content: flex-end;
`

const Logo = styled.img`
  height: 200px;
  width: auto;
  margin: 0;
`

export default () => (
  <App>
    <Row style={{ justifyContent: 'space-between' }}>
      <Column style={{ flex: 0.6, justifyContent: 'center' }}>
        <About>
          We are a small agency founded to bring your products to the market using state
          of the art technology and the best development practices out there.
        </About>
      </Column>
      {/*
        <Column style={{ flex: 0.3, justifyContent: 'center' }}>
          <LogoContainer>
            <Logo src="/static/logo.svg" />
          </LogoContainer>
        </Column>
      */}
    </Row>
    <Divider />
    <Section>
      <Header>Our specialities</Header>
      <Content>
        We focus on what we believe is today's <em>dreamstack</em> for web and mobile
        development:
        <List>
          <Item>
            <strong>React (Native)</strong> — for the UI
          </Item>
          <Item>
            <strong>Apollo / GraphQL</strong> — for data fetching and client/server
            communication
          </Item>
          <Item>
            <strong>TypeScript / ReasonML / ClojureScript</strong> — to write the code in
          </Item>
          <Item>
            <strong>Electron</strong> — for desktop apps
          </Item>
          <Item>
            <strong>Postgres</strong> — to store data
          </Item>
          <Item>
            <strong>Kubernetes</strong> — for orchestration
          </Item>
        </List>
      </Content>
    </Section>
    <Divider />
    <Section>
      <Header>Who whe are</Header>
      <Content>
        <Row style={{ justifyContent: 'space-between' }}>
          <Column style={{ flex: '0.33' }}>
            <Profile>
              <Photo url="https://media.licdn.com/media/p/8/005/024/251/22d2a48.jpg" />
              <Name>Yaniv Tal</Name>
              <Role>Partner &amp; Software Engineer</Role>
              <Skills>
                Business development, software architecture, React development
              </Skills>
              <Handles>
                <Handle type="twitter" url="https://twitter.com/yanivtalmusic" />
                <Handle type="linkedin" url="https://www.linkedin.com/in/yanivtal9/" />
              </Handles>
            </Profile>
          </Column>
          <Column style={{ flex: '0.33' }}>
            <Profile>
              <Photo url="https://media.licdn.com/media/AAEAAQAAAAAAAAigAAAAJDUzZDIwNGU5LTlhNTMtNDIyNy04ZDZlLTllYzI1ODE5NmE0ZA.jpg" />
              <Name>Brandon Ramirez</Name>
              <Role>Partner &amp; Software Engineer</Role>
              <Skills>Product development, development processes</Skills>
              <Handles>
                <Handle type="twitter" url="https://twitter.com/RezBrandon" />
                <Handle type="linkedin" url="https://www.linkedin.com/in/1stramirez/" />
              </Handles>
            </Profile>
          </Column>
          <Column style={{ flex: '0.33' }}>
            <Profile>
              <Photo url="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAy_AAAAJGVhYWJkZTYzLTgyMTEtNGU1NC1hYTRjLWZkYmY1ZTcwMDhlOA.jpg" />
              <Name>Jannis Pohlmann</Name>
              <Role>Partner &amp; Software Engineer</Role>
              <Skills>Processes, </Skills>
              <Handles>
                <Handle type="twitter" url="https://twitter.com/jannispohlmann" />
                <Handle type="linkedin" url="https://linkedin.com/in/jannispohlmann" />
              </Handles>
            </Profile>
          </Column>
        </Row>
      </Content>
    </Section>
  </App>
)
