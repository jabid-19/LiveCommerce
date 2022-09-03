import Banner from './Sections/Banner'
import Blogs from './Sections/Blogs'
import Cards from './Sections/Cards'
import CustomerReviews from './Sections/CustomerReviews'
import DataStat from './Sections/DataStat'
import FeaturedProducts from './Sections/FeaturedProducts'
import GetStartedShopping from './Sections/GetStartedShopping'
import LiveVideoShopping from './Sections/LiveVideoShopping'
// import LiveVideoSlickSLider from './Sections/LiveVideoSlickSlider'
import LiveVideoSlider from './Sections/LiveVideoSlider'
import Logos from './Sections/Logos'
import PersonalShopping from './Sections/PersonalShopping'
import Rechart from './Sections/Rechart'
// import TeamWorkSlickSlider from './Sections/TeamWorkSlickSlider'
import TeamWorkSlider from './Sections/TeamWorkSlider'

const LandingPageMain = () => {
  return (
    <div className="text-center">
      <Banner />
      <Logos />
      <Cards />
      <FeaturedProducts />
      <LiveVideoShopping />
      {/* <Rechart /> */}
      {/* <LiveVideoSlickSLider /> */}
      <LiveVideoSlider />
      <PersonalShopping />
      <CustomerReviews />
      {/* <TeamWorkSlickSlider /> */}
      <TeamWorkSlider />
      <DataStat />
      <Blogs />
      <GetStartedShopping />
      <Logos />
    </div>
  )
}

export default LandingPageMain
