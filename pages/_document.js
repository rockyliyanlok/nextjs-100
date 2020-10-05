import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const { lang }  = ctx.req || {}
    const { headers } = ctx.req || {}
    return { ...initialProps, lang, headers: JSON.stringify(headers) }
  }

  render() {
    return (
      <Html lang={this.props.lang || 'en'}>
        <Head />
        <body>
          <div dangerouslySetInnerHTML={{__html: JSON.stringify(JSON.parse(this.props.headers), null, 2)}}/>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
