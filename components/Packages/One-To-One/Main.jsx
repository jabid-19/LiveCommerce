import React from 'react'
import CompaniesIndex from '../../Shared/Companies'
import Faq from '../../Shared/Faq'
import Features from './section/Features'
import OneToOneIndex from './section/OneToOne'
const PackagesOneToOneMain = () => {
  const featuresContent = {
    featureTitlePart1: 'Simplify with many',
    featureTitlePart2: 'interesting',
    featureTitlePart3: 'features.',
    feature1: 'Encrypted and it is highly secured',
    feature2: 'Audio & HD video calling and live streaming',
    feature3: 'Not limited by time & places, go from anywhere',
    feature4: 'Compatible with every available devices',
    feature5: 'Multi-streaming',
  }
  return (
    <div>
      <OneToOneIndex />
      <CompaniesIndex />
      <Features featuresContent={featuresContent} />
      <Faq />
    </div>
  )
}

export default PackagesOneToOneMain
