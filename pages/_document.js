import Document, { Html, Head, Main, NextScript } from 'next/document'
import { getLangFromReq } from '../utils/fromReq'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const lang = getLangFromReq(ctx.req)
    return { ...initialProps, lang }
  }

  render() {
    return (
      <Html lang={this.props.lang}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
