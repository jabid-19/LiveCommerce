import Image from 'next/image'
import imageLoader from '../../../helper/imageLoader'
import profile1 from '../../../public/customers/profile1.jpg'
import profile2 from '../../../public/customers/profile2.jpg'
import profile3 from '../../../public/customers/profile3.jpg'
import StarRatings from 'react-star-ratings'

const CustomerReviews = () => {
  return (
    <div>
      <h3 className="text-2xl lg:text-4xl font-bold">Latest Customer Reviews</h3>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-14 my-14">
        <div
          data-aos="flip-left"
          className="card card-compact lg:max-width-lg bg-base-100 shadow-xl shadow-primary">
          <figure>
            <div className="avatar mt-8">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <Image
                  loader={imageLoader}
                  className="object-fill"
                  width={580}
                  height={580}
                  src={profile1}
                  alt="Girl Shopping"
                />
              </div>
            </div>
          </figure>
          <div className="card-body">
            <h2 className="card-title justify-center">Flora Watson</h2>
            <div>
              <StarRatings
                rating={5}
                starRatedColor="GoldenRod"
                starDimension="20px"
                starSpacing="5px"
              />
              <span className="ml-2">(5)</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt aperiam eius
              facere? Voluptate iste, ea necessitatibus id non consequuntur at, repellat repellendus
              porro facilis nostrum aperiam! Nemo beatae earum quae.
            </p>
          </div>
        </div>
        <div
          data-aos="flip-down"
          className="card card-compact lg:max-width-lg bg-base-100 shadow-xl shadow-primary">
          <figure>
            <div className="avatar mt-8">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <Image
                  loader={imageLoader}
                  className="object-fill"
                  width={580}
                  height={580}
                  src={profile2}
                  alt="Girl Shopping"
                />
              </div>
            </div>
          </figure>
          <div className="card-body">
            <h2 className="card-title justify-center">Will Smith</h2>
            <div>
              <StarRatings
                rating={4}
                starRatedColor="GoldenRod"
                starDimension="20px"
                starSpacing="5px"
              />
              <span className="ml-2">(4)</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt aperiam eius
              facere? Voluptate iste, ea necessitatibus id non consequuntur at, repellat repellendus
              porro facilis nostrum aperiam! Nemo beatae earum quae.
            </p>
          </div>
        </div>
        <div
          data-aos="flip-right"
          className="card card-compact lg:max-width-lg bg-base-100 shadow-xl shadow-primary">
          <figure>
            <div className="avatar mt-8">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <Image
                  loader={imageLoader}
                  className="object-fill"
                  width={580}
                  height={580}
                  src={profile3}
                  alt="Girl Shopping"
                />
              </div>
            </div>
          </figure>
          <div className="card-body">
            <h2 className="card-title justify-center">Emily Clark</h2>
            <div>
              <StarRatings
                rating={5}
                starRatedColor="GoldenRod"
                starDimension="20px"
                starSpacing="5px"
              />
              <span className="ml-2">(5)</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt aperiam eius
              facere? Voluptate iste, ea necessitatibus id non consequuntur at, repellat repellendus
              porro facilis nostrum aperiam! Nemo beatae earum quae.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerReviews
