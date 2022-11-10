import Head from 'next/head'
import Image from 'next/image'
// import { useRouter } from 'next/router'
// import React, { useEffect, useState } from 'react'
import wpImageLoader from '../../helper/wpImageLoader'

export const getStaticPaths = async () => {
  const res = await fetch('https://dev-golaiv.pantheonsite.io/wp-json/wp/v2/posts?_embed')
  const data = await res.json()

  // map data to an array of path objects with params (slug)
  const paths = data.map((prop) => {
    return {
      params: { slug: prop.slug.toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const slug = context.params.slug
  const res = await fetch(
    'https://dev-golaiv.pantheonsite.io/wp-json/wp/v2/posts?_embed&slug=' + slug
  )
  const data = await res.json()

  return {
    props: { singleProp: data },
  }
}

// export const getServerSideProps = async (context) => {
//   const slug = context.params.slug
//   const res = await fetch(
//     'https://dev-golaiv.pantheonsite.io/wp-json/wp/v2/posts?_embed&slug=' + slug
//   )
//   const data = await res.json()
//   return {
//     props: { singleProp: data },
//   }
// }

const Details = ({ singleProp }) => {
  // const Details = () => {
  //   const [singleProp, setSingleProp] = useState([])
  //   const router = useRouter()
  //   const slug = router.query.slug
  //   console.log('router', router.query.slug)
  //   useEffect(() => {
  //     fetch('https://dev-golaiv.pantheonsite.io/wp-json/wp/v2/posts?_embed&slug=' + slug)
  //       .then((res) => res.json())
  //       .then((data) => setSingleProp(data))
  //   }, [slug])
  //   console.log('props', singleProp)

  return (
    <div>
      <Head>
        <title>{`Go Laiv | Blogs | ${singleProp[0].slug}`}</title>
        <meta
          name="description"
          content="Trusted video platform for growing business. No matter where you are or what your customer demands, our straightforward and intuitive interface as well as features must assist you grow your business."
        />
        <meta property="og:site_name" content="Go Laiv" />
        <meta property="og:title" content="Go Laiv Blogs" />
        <meta
          property="og:description"
          content="Trusted video platform for growing business. No matter where you are or what your customer demands, our straightforward and intuitive interface as well as features must assist you grow your business."
        />
        <meta property="og:url" content={`https://www.golaiv.com/blogs/${singleProp[0].slug}`} />
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
      <div className="bg-[#e8e4d9]">
        <div className="p-4 lg:py-20">
          <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 lg:px-8 py-4 lg:py-10 bg-white rounded-2xl">
            <h1 className="text-left lg:text-center text-secondary font-bold text-4xl lg:text-5xl mb-8">
              {singleProp[0]['title']['rendered']}
            </h1>
            <div className="flex justify-center items-center">
              <Image
                loader={wpImageLoader}
                width={1024}
                height={538}
                objectFit="contain"
                src={singleProp[0]['_embedded']['wp:featuredmedia'][0]['source_url']}
                alt={singleProp[0]['_embedded']['wp:featuredmedia'][0]['alt_text']}
              />
            </div>
            <hr className="bg-secondary border-secondary border-[1px] mt-8" />
            <div
              className="text-black wordpress-content mt-4"
              dangerouslySetInnerHTML={{ __html: singleProp[0]['content']['rendered'] }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
