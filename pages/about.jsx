import Head from 'next/head'
import React from 'react'
import AboutMain from '../components/About/Main'
const About = () => {
  return (
    <section>
      <Head>
        <title>Go Laiv | About</title>
        <meta name="description" content="Live Commerce many to many section" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <AboutMain></AboutMain>
      </div>
    </section>
  )
}

export default About
