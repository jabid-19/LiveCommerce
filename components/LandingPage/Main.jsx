import Banner from './Sections/Banner'
// import Blogs from './Sections/Blogs'
import Cards from './Sections/Cards'
// import CustomerReviews from './Sections/CustomerReviews'
import DataStat from './Sections/DataStat'
import FeaturedProducts from './Sections/FeaturedProducts'
import GetStartedShopping from './Sections/GetStartedShopping'
import LiveVideoShopping from './Sections/LiveVideoShopping'
import PersonalShopping from './Sections/PersonalShopping'
// import TeamWorkSlider from './Sections/TeamWorkSlider'
import Companies from '../Shared/Companies'
import Features from '../Packages/One-To-One/section/Features'
// import SimplifyFeatures from './Sections/SimplifyFeatures'
import { IoPeopleOutline } from 'react-icons/io5'
import { IoIosPeople } from 'react-icons/io'
import { MdLiveTv } from 'react-icons/md'
import { RiBroadcastFill } from 'react-icons/ri'

const LandingPageMain = () => {
  const featuresContent = {
    featureTitlePart1: 'Simplify with many',
    featureTitlePart2: 'interesting',
    featureTitlePart3: 'features.',
    feature1: 'One to One',
    feature2: 'One to Many',
    feature3: 'Live Commerce',
    feature4: 'Multi-streaming',
    icon1: <IoPeopleOutline size={20} />,
    icon2: <IoIosPeople size={20} />,
    icon3: <MdLiveTv size={20} />,
    icon4: <RiBroadcastFill size={20} />,
  }
  // const icons = {
  //   icon1: <IoPeopleOutline size={20} />,
  //   icon2: <IoIosPeople size={20} />,
  //   icon3: <MdLiveTv size={20} />,
  //   icon4: <RiBroadcastFill size={20} />,
  // }
  return (
    <div className="text-center bg-[#e8e4d9]">
      <Banner />
      {/* <SimplifyFeatures featuresContent={featuresContent} /> */}
      <Features featuresContent={featuresContent} />
      {/* <div className="bg-white">
        <hr className="border-secondary"></hr>
        <Companies />
        <hr className="border-secondary"></hr>
      </div> */}
      <FeaturedProducts />
      <Cards />
      <LiveVideoShopping />
      {/* <LiveVideoSlider /> */}
      <PersonalShopping />
      {/* <CustomerReviews /> */}
      {/* <TeamWorkSlider /> */}
      <DataStat />
      {/* <Blogs /> */}
      <GetStartedShopping />
      {/* <Companies /> */}
    </div>
  )
}

export default LandingPageMain
