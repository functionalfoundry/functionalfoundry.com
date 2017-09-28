import Head from 'next/head'
import { StaggeredMotion, spring, presets } from 'react-motion'
import { TypographyStyle } from 'react-typography'

import { Colors, TypographyConfig } from '../../utils/styles'

import Page from './components/Page'
import Header from '../Header'
import Footer from '../Footer'
import Content from './components/Content'

export default ({ children }) => (
  <StaggeredMotion
    defaultStyles={[{ opacity: 0 }, { opacity: 0 }, { opacity: 0 }]}
    styles={prevStyles =>
      prevStyles.map((_, i) => {
        return i === 0
          ? { opacity: spring(100, presets.gentle) }
          : { opacity: spring(prevStyles[i - 1].opacity, presets.gentle) }
      })}
  >
    {styles => (
      <Page>
        <style global jsx>{`
          body {
            background-color: white;
          }
        `}</style>
        <Header style={{ opacity: styles[0].opacity / 100.0 }} />
        <Content style={{ opacity: styles[1].opacity / 100.0 }}>{children}</Content>
        <Footer style={{ opacity: styles[2].opacity / 100.0 }} />
      </Page>
    )}
  </StaggeredMotion>
)
