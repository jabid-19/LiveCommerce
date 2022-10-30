import Image from 'next/image'
import wpImageLoader from '../../../helper/wpImageLoader'
import React from 'react'
// import Link from 'next/link'

// const SingleBlog = ({ prop }) => {
const SingleBlog = () => {
  return (
    // <Link href={`/blog/${prop['slug']}`}>
    <div
      data-aos="zoom-in"
      data-aos-anchor-placement="top-bottom"
      className="card card-compact lg:max-width-lg bg-base-100 hover:bg-amber-100 hover:opacity-80 cursor-pointer">
      <figure>
        <Image
          loader={wpImageLoader}
          className="object-cover w-full"
          width={826}
          height={468}
          priority={true}
          src={prop['_embedded']['wp:featuredmedia'][0]['source_url']}
          alt={prop['_embedded']['wp:featuredmedia'][0]['alt_text']}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-left text-black">
          {prop['title']['rendered']}
          {/* New Shoes Arrived! */}
          {/* <div className="badge badge-secondary text-black">NEW</div> */}
        </h2>
        <div
          className="text-left text-black"
          dangerouslySetInnerHTML={{ __html: prop['excerpt']['rendered'] }}></div>
        {/* <div className="card-actions justify-start">
          <div className="badge badge-outline hover:bg-primary hover:text-white hover:border-accent text-black">
            Article
          </div>
          <div className="badge badge-outline hover:bg-primary hover:text-white hover:border-accent text-black">
            Product
          </div>
        </div> */}
      </div>
    </div>
    // </Link>
  )
}

export default SingleBlog
