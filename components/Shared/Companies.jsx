import Image from 'next/image'
import React from 'react'
import Alibaba from '../../public/company-logos/Alibaba.svg'
import Amazon from '../../public/company-logos/Amazon.svg'
import Daraz from '../../public/company-logos/DarazLogo.svg'
import Ebay from '../../public/company-logos/Ebay.svg'
import Rakuten from '../../public/company-logos/Rakuten.svg'
import Target from '../../public/company-logos/Target.svg'
import Walmart from '../../public/company-logos/Walmart.svg'
const CompaniesIndex = () => {
  const Companies = [Alibaba, Amazon, Daraz, Ebay, Rakuten, Walmart, Target]
  return (
    <div className="w-full overflow-hidden">
      <div className="flex justify-between items-center w-[200%] animate-bannerMoveAnimation">
        <div className="w-full flex justify-around gap-5">
          {Companies.map((company, index) => (
            <div className="flex list-none pl-0 m-0" key={index}>
              <div className="w-[100px] h-[100px]">
                <Image src={company} height={100} width={100} alt="company logo" />
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-around gap-5">
          {Companies.map((company, index) => (
            <div className="flex list-none pl-0 m-0" key={index}>
              <div className="w-[100px] h-[100px]">
                <Image src={company} height={100} width={100} alt="company logo" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CompaniesIndex
