import Head from 'next/head'
import React from 'react'

const Index = () => {
  return (
    <>
      <Head>
        <title>Next.js 100</title>
        <meta name="Description" content="Build a PWA with Next.js to achieve 100 lighthouse score."></meta>

        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
        <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
        <meta name="theme-color" content="#317EFB"/>
      </Head>
      <div>
        Next.js 100
      </div>
    </>
  )
}

export default Index
