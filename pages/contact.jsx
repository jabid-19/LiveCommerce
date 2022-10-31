import ContactUsMain from '../components/ContactUs/ContactUsMain'
import Head from 'next/head'

const Contact = () => {
  return (
    <section>
      <Head>
        <title>Go Laiv | Contact</title>
        <meta name="google-site-verification" content="google64f0849d94428d34.html" />
        <meta name="description" content="Go Laiv Contact" />
        <meta property="og:site_name" content="Go Laiv" />
        <meta property="og:title" content="Go Laiv Contact" />
        <meta property="og:description" content="Fill in the form and we'll be in touch soon…" />
        <meta property="og:url" content="https://www.golaiv.com/contact" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://live-commerce-jade.vercel.app/_next/static/media/camera.3f4e1679.avif?q=80%7D&w=640"
        />
        <meta
          property="og:image:secure_url"
          content="https://live-commerce-jade.vercel.app/_next/static/media/camera.3f4e1679.avif?q=80%7D&w=640"
        />
        {/* recommended dimensions 1200×630 pixels */}
        <meta property="og:image:width" content="407" />
        <meta property="og:image:height" content="581" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content="https://live-commerce-jade.vercel.app/_next/static/media/camera.3f4e1679.avif?q=80%7D&w=640"
        />
        {/* <meta property="twitter:site" content="@golaiv" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <ContactUsMain />
      </div>
    </section>
  )
}

export default Contact
