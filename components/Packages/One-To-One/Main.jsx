import React from 'react'
import CompaniesIndex from '../../Shared/Companies'
import Faq from '../../Shared/Faq'
import Features from './section/Features'
import OneToOneIndex from './section/OneToOne'
import { BiDevices } from 'react-icons/bi'
import { BsCameraVideo, BsLightning, BsLock } from 'react-icons/bs'

const PackagesOneToOneMain = () => {
  const featuresContent = {
    featureTitlePart1: 'Simplify with many',
    featureTitlePart2: 'interesting',
    featureTitlePart3: 'features.',
    feature1: 'Encrypted and it is highly secured',
    feature2: 'Audio & HD video calling and live streaming',
    feature3: 'Not limited by time & places, go from anywhere',
    feature4: 'Compatible with every available devices',
    icon1: <BsLock size={20} />,
    icon2: <BsCameraVideo size={20} />,
    icon3: <BsLightning size={20} />,
    icon4: <BiDevices size={20} />,
  }
  // const icons = {
  //   icon1: <BsLock size={20} />,
  //   icon2: <BsCameraVideo size={20} />,
  //   icon3: <BsLightning size={20} />,
  //   icon4: <BiDevices size={20} />,
  // }
  return (
    <div>
      <OneToOneIndex />
      {/* <CompaniesIndex /> */}
      <Features featuresContent={featuresContent} />
      <div className="bg-[#e8e4d9]">
        <Faq />
      </div>
    </div>
  )
}

export default PackagesOneToOneMain
