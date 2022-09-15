import ContactUsMain from '../components/ContactUs/ContactUsMain'
import Head from 'next/head'

const Contact = () => {
  return (
    <section>
      <Head>
        <title>Go Laiv | Contact</title>
        <meta name="description" content="Live Commerce Contact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <ContactUsMain />
      </div>
    </section>
  )
}

export default Contact
