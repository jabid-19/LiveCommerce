import Head from 'next/head'
import React from 'react'
import PackagesOneToOneMain from '../../components/Packages/One-To-One/Main'

const OneToOneMain = () => {
  return (
    <section>
      <Head>
        <title>Go Laiv | One To One</title>
        <meta name="google-site-verification" content="google64f0849d94428d34.html" />
        <meta name="description" content="Go Laiv one to one section" />
        <meta property="og:site_name" content="Go Laiv" />
        <meta
          property="og:title"
          content="Go Laiv One to One - Connect easily without
any hassle"
        />
        <meta
          property="og:description"
          content="Wherever you are, just make sure your internet connection is with a laptop or mobile and start a virtual meeting…"
        />
        <meta property="og:url" content="https://www.golaiv.com/packages/one-to-one" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://live-commerce-jade.vercel.app/_next/static/media/videocall.be51cfc6.png?q=80%7D&w=640"
        />
        <meta
          property="og:image:secure_url"
          content="https://live-commerce-jade.vercel.app/_next/static/media/videocall.be51cfc6.png?q=80%7D&w=640"
        />
        {/* recommended dimensions 1200×630 pixels */}
        <meta property="og:image:width" content="711" />
        <meta property="og:image:height" content="532" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content="https://live-commerce-jade.vercel.app/_next/static/media/videocall.be51cfc6.png?q=80%7D&w=640"
        />
        {/* <meta property="twitter:site" content="@golaiv" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative w-full">
        <PackagesOneToOneMain />
      </div>
    </section>
  )
}

export default OneToOneMain
