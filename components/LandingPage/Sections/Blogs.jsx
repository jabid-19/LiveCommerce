import Image from 'next/image'
import imageLoader from '../../../helper/imageLoader'
import onlineMessage from '../../../public/blogs/online-message.webp'
import webDesign from '../../../public/blogs/website-design.webp'
import digitalContent from '../../../public/blogs/digital-content.webp'

const Blogs = () => {
  return (
    <div className="py-8">
      <div>
        <h3 className="text-2xl lg:text-4xl font-bold text-black">Blogs</h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-14 my-14">
          <div
            data-aos="flip-left"
            className="card card-compact lg:max-width-lg bg-base-100 shadow-xl shadow-primary hover:bg-amber-100 hover:opacity-80">
            <figure>
              <Image
                loader={imageLoader}
                className="object-fill w-full"
                width={826}
                height={468}
                src={onlineMessage}
                alt="Blog Picture"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-left text-black">
                New Shoes Arrived!<div className="badge badge-secondary text-black">NEW</div>
              </h2>
              <p className="text-left text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quaerat?
              </p>
              <div className="card-actions justify-start">
                <div className="badge badge-outline hover:bg-primary hover:text-white hover:border-accent text-black">
                  Article
                </div>
                <div className="badge badge-outline hover:bg-primary hover:text-white hover:border-accent text-black">
                  Product
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="flip-down"
            className="card card-compact lg:max-width-lg bg-base-100 shadow-xl shadow-primary hover:bg-amber-100  hover:opacity-80">
            <figure>
              <Image
                loader={imageLoader}
                className="object-fill w-full"
                width={826}
                height={468}
                src={digitalContent}
                alt="Blog Picture"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-left text-black">
                New Bags in Stock!<div className="badge badge-secondary text-black">NEW</div>
              </h2>
              <p className="text-left text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quaerat?
              </p>
              <div className="card-actions justify-start">
                <div className="badge badge-outline hover:bg-primary hover:text-white hover:border-accent text-black">
                  Article
                </div>
                <div className="badge badge-outline hover:bg-primary hover:text-white hover:border-accent text-black">
                  Product
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="flip-right"
            className="card card-compact lg:max-width-lg bg-base-100 shadow-xl shadow-primary hover:bg-amber-100  hover:opacity-80">
            <figure>
              <Image
                loader={imageLoader}
                className="object-fill w-full"
                width={826}
                height={468}
                src={webDesign}
                alt="Blog Picture"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-left text-black">
                25% Sale on Clothes!<div className="badge badge-secondary text-black">HOT</div>
              </h2>
              <p className="text-left text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, quaerat?
              </p>
              <div className="card-actions justify-start">
                <div className="badge badge-outline hover:bg-primary hover:text-white hover:border-accent text-black">
                  Article
                </div>
                <div className="badge badge-outline hover:bg-primary hover:text-white hover:border-accent text-black">
                  Product
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
