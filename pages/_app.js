import App from 'next/app'

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async ctx => {
  const appProps = await App.getInitialProps(ctx)

  return { ...appProps }
}

export default MyApp
