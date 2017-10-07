import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { GoogleFont, TypographyStyle } from 'react-typography'

import { Colors, TypographyConfig } from '../utils/styles'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            property="og:image"
            content="https://s3.amazonaws.com/workflo/design-assets/LogoPadding.png"
          />
          <meta property="og:description" content="Fullstack & blockchain agency" />
          <title>Functional Foundry</title>
          {this.props.styleTags}
          <TypographyStyle typography={TypographyConfig} />
          <GoogleFont typography={TypographyConfig} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
