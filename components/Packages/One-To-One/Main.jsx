import React from 'react'
import CompaniesIndex from '../../Shared/Companies'
import Faq from '../../Shared/Faq'
import Features from './section/Features'
import OneToOneIndex from './section/OneToOne'
import { BiDevices } from 'react-icons/bi'
import { BsCameraVideo, BsLightning, BsLock } from 'react-icons/bs'

const PackagesOneToOneMain = () => {
  const featuresContent = {
    featureTitlePart1: 'Be uncompetitive with more',
    featureTitlePart2: 'fascinating ',
    featureTitlePart3: 'features.',
    feature1: 'Make sure end-to-end encrypted',
    feature2: 'Audio & premium live-streaming',
    feature3: 'Barrier-free communication',
    feature4: 'Compatible with available devices',
    icon1: <BsLock size={20} />,
    icon2: <BsCameraVideo size={20} />,
    icon3: <BsLightning size={20} />,
    icon4: <BiDevices size={20} />,
  }
  return (
    <div className="bg-[#e8e4d9]">
      <OneToOneIndex />
      {/* <CompaniesIndex /> */}
      <Features featuresContent={featuresContent} />
      <Faq />
    </div>
  )
}

export default PackagesOneToOneMain
