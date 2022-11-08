// import SingleBlog from './SingleBlog'
import Link from 'next/link'
import Image from 'next/image'
import wpImageLoader from '../../../helper/wpImageLoader'
import { useRouter } from 'next/router'

const Blogs = ({ propData }) => {
  const router = useRouter()
  return (
    <div className="py-8 2xl:max-w-[1536px] mx-auto">
      {router.pathname === '/' && (
        <h3 className="text-2xl lg:text-4xl font-bold text-black">Latest blogs</h3>
      )}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-8 md:mx-14 my-14">
        {propData.map((prop) => (
          <Link key={prop.id} href={`/blogs/${prop['slug']}`}>
            <a>
              <div
                data-aos="zoom-in"
                data-aos-anchor-placement="top-bottom"
                className="card card-compact lg:max-width-lg bg-base-100 hover:bg-secondary [&>*]:hover:opacity-80 cursor-pointer h-full text-black [&>*]:hover:text-white">
                <figure>
                  <Image
                    loader={wpImageLoader}
                    className="object-cover"
                    width={826}
                    height={468}
                    priority="true"
                    src={prop['_embedded']['wp:featuredmedia'][0]['source_url']}
                    alt={prop['_embedded']['wp:featuredmedia'][0]['alt_text']}
                  />
                </figure>
                <div className="card-body hover:opacity-100">
                  <h2 className="card-title text-left">{prop['title']['rendered']}</h2>
                  {/* <div
                    className="text-left"
                    dangerouslySetInnerHTML={{ __html: prop['excerpt']['rendered'] }}></div> */}
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Blogs
