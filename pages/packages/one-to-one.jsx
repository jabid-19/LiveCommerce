import Head from 'next/head'
import React from 'react'
import PackagesOneToOneMain from '../../components/Packages/One-To-One/Main'

const OneToOneMain = () => {
  return (
    <section>
      <Head>
        <title>Live Commerce | One To One</title>
        <meta name="description" content="Live Commerce many to many section" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative w-full">
        <PackagesOneToOneMain />
      </div>
    </section>
  )
}

export default OneToOneMain
