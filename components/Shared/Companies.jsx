import Image from 'next/image'
import React from 'react'
import Alibaba from '../../public/company-logos/Alibaba.svg'
import Amazon from '../../public/company-logos/Amazon.svg'
import Daraz from '../../public/company-logos/DarazLogo.svg'
import Ebay from '../../public/company-logos/Ebay.svg'
import Rakuten from '../../public/company-logos/Rakuten.svg'
import Target from '../../public/company-logos/Target.svg'
import Walmart from '../../public/company-logos/Walmart.svg'
import styles from '../../styles/Companies.module.scss'
const CompaniesIndex = () => {
  const Companies = [Alibaba, Amazon, Daraz, Ebay, Rakuten, Walmart, Target]
  return (
    <div className={styles.sliderSection}>
      <div className={styles.slidesContainer}>
        <div className={styles.companyLogo}>
          {Companies.map((company, index) => (
            <div className={styles.sliderUl} key={index}>
              <div className={styles.sliderLI}>
                <Image src={company} height={100} width={100} alt="company logo" />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.companyLogo}>
          {Companies.map((company, index) => (
            <div className={styles.sliderUl} key={index}>
              <div className={styles.sliderLI}>
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
