import Head from 'next/head'
import React from 'react'
import PricingMain from '../components/Pricing/Main'

const pricing = () => {
  return (
    <div>
      <Head>
        <title>Go Laiv | Pricing</title>
        <meta name="description" content="Go Laiv Pricing Section" />
        <meta property="og:site_name" content="Go Laiv" />
        <meta property="og:title" content="Go Laiv Pricing" />
        <meta
          property="og:description"
          content="You can choose plans according to your convenience…"
        />
        <meta property="og:url" content="https://www.golaiv.com/pricing" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://live-commerce-jade.vercel.app/_next/static/media/meeting.b7593bce.jpg?q=80%7D&w=1080"
        />
        <meta
          property="og:image:secure_url"
          content="https://live-commerce-jade.vercel.app/_next/static/media/meeting.b7593bce.jpg?q=80%7D&w=1080"
        />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="667" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content="https://live-commerce-jade.vercel.app/_next/static/media/meeting.b7593bce.jpg?q=80%7D&w=1080"
        />
        <meta property="twitter:site" content="@golaiv" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PricingMain />
    </div>
  )
}

export default pricing
