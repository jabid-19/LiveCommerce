import Image from 'next/image'
import imageLoader from '../../../helper/imageLoader'
import Alibaba from '../../../public/logos/Alibaba.svg'
import Amazon from '../../../public/logos/Amazon.svg'
import Daraz from '../../../public/logos/Daraz.pk Logo.svg'
import Ebay from '../../../public/logos/Ebay.svg'
import Rakuten from '../../../public/logos/Rakuten.svg'
import Walmart from '../../../public/logos/Walmart.svg'
import Target from '../../../public/logos/Target.svg'

const Logos = () => {
  return (
    <div>
      <hr className="border-gray-400"></hr>
      <div className="grid grid-cols-4 gap-4 lg:flex lg:justify-between align-center px-4 py-8">
        <Image
          loader={imageLoader}
          className="object-fill"
          width={80}
          height={50}
          src={Alibaba}
          alt=""
        />
        <Image
          loader={imageLoader}
          className="object-fill"
          width={80}
          height={50}
          src={Amazon}
          alt=""
        />
        <Image
          loader={imageLoader}
          className="object-fill"
          width={80}
          height={50}
          src={Daraz}
          alt=""
        />
        <Image
          loader={imageLoader}
          className="object-fill"
          width={80}
          height={50}
          src={Ebay}
          alt=""
        />
        <Image
          loader={imageLoader}
          className="object-fill"
          width={80}
          height={50}
          src={Rakuten}
          alt=""
        />
        <Image
          loader={imageLoader}
          className="object-fill"
          width={80}
          height={50}
          src={Walmart}
          alt=""
        />
        <Image
          loader={imageLoader}
          className="object-fill"
          width={80}
          height={50}
          src={Target}
          alt=""
        />
      </div>
      <hr className="border-gray-400"></hr>
    </div>
  )
}

export default Logos
