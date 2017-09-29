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
import Project from '../components/Project'
import GetInTouch from '../components/GetInTouch'

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
      <Column style={{ flex: 0.8, justifyContent: 'center' }}>
        <About>
          We are a boutique agency founded to bring your products to market using state of
          the art technology and tested development practices.
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
      <Header>Meet the team</Header>
      <Content>
        <Row style={{ justifyContent: 'space-between' }}>
          <Column style={{ flex: '0.33' }}>
            <Profile>
              <Photo url="https://media.licdn.com/media/p/8/005/024/251/22d2a48.jpg" />
              <Name>Yaniv Tal</Name>
              <Role>Partner &amp; Software Engineer</Role>
              <Skills>
                A systems thinker that starts from the user experience and architects
                solutions for agility.
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
              <Skills>
                Brings focus to development processes and enjoys applying category theory
                to improving codebases.
              </Skills>
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
              <Skills>
                Likes hard technical problems and developing robust libraries, frameworks,
                and algorithms.
              </Skills>
              <Handles>
                <Handle type="twitter" url="https://twitter.com/jannispohlmann" />
                <Handle type="linkedin" url="https://linkedin.com/in/jannispohlmann" />
              </Handles>
            </Profile>
          </Column>
        </Row>
      </Content>
    </Section>
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
            <strong>TypeScript / ReasonML / ClojureScript</strong> — for frontend
            languages
          </Item>
          <Item>
            <strong>Node / Go</strong> — for servers
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
      <Row style={{ justifyContent: 'space-between' }}>
        <Column style={{ flex: 0.8, justifyContent: 'center' }}>
          <About>
            We're comfortable joining a project early, often when it's still just a
            concept. We'll help you define an achievable project plan and work closely
            with your team to turn your idea into reality.
          </About>
        </Column>
      </Row>
    </Section>
    <Divider />
    <Section>
      <Header>Things we've built</Header>
      <Content>
        <Row style={{ justifyContent: 'space-between' }}>
          <Column style={{ flex: '0.50' }}>
            <Project url="https://s3.amazonaws.com/workflo/thumbnails/RuntimeManager.gif" />
          </Column>
          <Column style={{ flex: '0.50' }}>
            <Project url="https://s3.amazonaws.com/workflo/thumbnails/workflo-demo.gif" />
          </Column>
        </Row>
      </Content>
    </Section>
    <Divider />
    <Section>
      <Header>Blockchain</Header>
      <Row style={{ justifyContent: 'space-between' }}>
        <Column style={{ flex: 0.8, justifyContent: 'center' }}>
          <About>
            While relative newcomers to the space, we're rapidly developing a proficiency
            in smart contracts and interacting with blockchains. If you're working in this
            space, we'd love to talk with you.
          </About>
        </Column>
      </Row>
    </Section>
    <Section style={{ padding: '6em 0em 2em 0em' }}>
      <GetInTouch email="brandon@functionalfoundry.com" />
    </Section>
  </App>
)
