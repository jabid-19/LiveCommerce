import Image from 'next/image'
import React from 'react'
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

const Details = ({ singleProp }) => {
  console.log('single prop', singleProp)
  return (
    <div className="bg-[#e8e4d9]">
      <div className="p-4 lg:p-8">
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 lg:px-8 py-4 lg:py-10 bg-white rounded-2xl">
          <h1 className="text-left lg:text-center text-black text-4xl lg:text-5xl mb-8">
            {singleProp[0]['title']['rendered']}
          </h1>
          <div className="flex justify-center items-center">
            <Image
              loader={wpImageLoader}
              // className="object-cover w-full"
              width={1024}
              height={538}
              // layout="fill"
              objectFit="contain"
              src={singleProp[0]['_embedded']['wp:featuredmedia'][0]['source_url']}
              alt={singleProp[0]['_embedded']['wp:featuredmedia'][0]['alt_text']}
            />
          </div>
          <hr className="bg-black border-black border-[1px] mt-4" />
          <div
            className="text-black wordpress-content mt-4"
            dangerouslySetInnerHTML={{ __html: singleProp[0]['content']['rendered'] }}></div>
        </div>
      </div>
    </div>
  )
}

export default Details
