import Head from 'next/head'
import React from 'react'
import AboutMain from '../components/About/Main'
const About = () => {
  return (
    <section>
      <Head>
        <title>Go Laiv | About</title>
        <meta name="google-site-verification" content="google64f0849d94428d34.html" />
        <meta name="description" content="Go Laiv about section" />
        <meta property="og:site_name" content="Go Laiv" />
        <meta property="og:title" content="Go Laiv About - How we work for your business growth" />
        <meta
          property="og:description"
          content="Connect with unlimited customers by hosting shoppable live streams or pre-recorded videos on your native website. This doesn't matter where they are…"
        />
        <meta property="og:url" content="https://www.golaiv.com/about" />
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
      <div>
        <AboutMain></AboutMain>
      </div>
    </section>
  )
}

export default About
