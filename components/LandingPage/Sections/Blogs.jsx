// import SingleBlog from './SingleBlog'
import Link from 'next/link'
import Image from 'next/image'
import wpImageLoader from '../../../helper/wpImageLoader'

const Blogs = ({ propData }) => {
  return (
    <div className="py-8">
      <div>
        <h3 className="text-2xl lg:text-4xl font-bold text-black">Blogs</h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-8 md:mx-14 my-14">
          {propData.map((prop) => (
            <Link key={prop.id} href={`/blogs/${prop['slug']}`}>
              <div
                data-aos="zoom-in"
                data-aos-anchor-placement="top-bottom"
                className="card card-compact lg:max-width-lg bg-base-100 hover:bg-amber-100 hover:opacity-80 cursor-pointer h-full">
                <figure>
                  <Image
                    loader={wpImageLoader}
                    className="object-cover w-full bg-secondary"
                    width={826}
                    height={468}
                    priority={true}
                    src={prop['_embedded']['wp:featuredmedia'][0]['source_url']}
                    alt={prop['_embedded']['wp:featuredmedia'][0]['alt_text']}
                    placeholder="blur"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-left text-black">
                    {prop['title']['rendered']}
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
              {/* <SingleBlog key={prop.id} prop={prop}></SingleBlog> */}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blogs
