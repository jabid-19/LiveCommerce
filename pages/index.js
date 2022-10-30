import Head from 'next/head'
import LandingPageMain from '../components/LandingPage/Main'

// export const getServerSideProps = async () => {
//   const res = await fetch('http://livecommerce.local/wp-json/wp/v2/posts?_embed')
//   const data = await res.json()
//   return {
//     props: { propData: data },
//   }
// }

// export default function Home({ propData }) {
export default function Home() {
  return (
    <div>
      <Head>
        <title>Go Laiv</title>
        <meta name="description" content="Go Laiv Homepage" />
        <meta property="og:site_name" content="Go Laiv" />
        <meta
          property="og:title"
          content="Go Laiv - Trusted video platform for growing business!"
        />
        <meta
          property="og:description"
          content="No matter where you are or what your customer demands, our straightforward and intuitive interface as well as features must assist you grow your business…"
        />
        <meta property="og:url" content="https://www.golaiv.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://live-commerce-jade.vercel.app/_next/static/media/meeting_2.a1e6f87d.jpg?q=80&w=640"
        />
        <meta
          property="og:image:secure_url"
          content="https://live-commerce-jade.vercel.app/_next/static/media/meeting_2.a1e6f87d.jpg?q=80&w=640"
        />
        {/* recommended dimensions 1200×630 pixels */}
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="667" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content="https://live-commerce-jade.vercel.app/_next/static/media/meeting_2.a1e6f87d.jpg?q=80&w=640"
        />
        {/* <meta property="twitter:site" content="@golaiv" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <LandingPageMain propData={propData} /> */}
        <LandingPageMain />
      </main>
    </div>
  )
}
