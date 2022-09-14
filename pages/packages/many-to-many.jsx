import Head from 'next/head'
import React from 'react'
import PackagesManyToManyMain from '../../components/Packages/Many-To-Many/Main'

const ManyToManyMain = () => {
  return (
    <section>
      <Head>
        <title>Live Commerce | Many To Many</title>
        <meta name="description" content="Live Commerce many to many section" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative w-full">
        <PackagesManyToManyMain />
      </div>
    </section>
  )
}

export default ManyToManyMain
