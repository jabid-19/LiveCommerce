import Head from 'next/head'
import React from 'react'
import PackagesManyToManyMain from '../../components/Packages/Many-To-Many/Main'

const ManyToManyMain = () => {
  return (
    <section>
      <Head>
        <title>Go Laiv | One To Many</title>
        <meta
          name="description"
          content="Trusted video platform for growing business. No matter where you are or what your customer demands, our straightforward and intuitive interface as well as features must assist you grow your business."
        />
        <meta property="og:site_name" content="Go Laiv" />
        <meta property="og:title" content="Go Laiv One to Many - Connect with anyone anytime" />
        <meta
          property="og:description"
          content="Trusted video platform for growing business. No matter where you are or what your customer demands, our straightforward and intuitive interface as well as features must assist you grow your business."
        />
        <meta property="og:url" content="https://www.golaiv.com/packages/one-to-many" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://live-commerce-jade.vercel.app/_next/static/media/meeting.b7593bce.jpg?q=80%7D&w=1080"
        />
        <meta
          property="og:image:secure_url"
          content="https://live-commerce-jade.vercel.app/_next/static/media/meeting.b7593bce.jpg?q=80%7D&w=1080"
        />
        {/* recommended dimensions 1200×630 pixels */}
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="667" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content="https://live-commerce-jade.vercel.app/_next/static/media/meeting.b7593bce.jpg?q=80%7D&w=1080"
        />
        {/* <meta property="twitter:site" content="@golaiv" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative w-full">
        <PackagesManyToManyMain />
      </div>
    </section>
  )
}

export default ManyToManyMain
