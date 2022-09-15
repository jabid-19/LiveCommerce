import Head from 'next/head'
import React from 'react'
import PricingMain from '../components/Pricing/Main'

const pricing = () => {
  return (
    <div>
      <Head>
        <title>Go Laiv | Pricing</title>
        <meta name="description" content="LiveCommerce Pricing Sections" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PricingMain />
    </div>
  )
}

export default pricing
