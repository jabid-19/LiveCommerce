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
// import Features from '../Packages/One-To-One/section/Features'
import SimplifyFeatures from './Sections/SimplifyFeatures'

const LandingPageMain = () => {
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
    <div className="text-center bg-[#e8e4d9]">
      <Banner />
      <SimplifyFeatures featuresContent={featuresContent} />
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
