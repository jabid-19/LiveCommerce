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
import PersonalShopping from './Sections/PersonalShopping'
// import Rechart from './Sections/Rechart'
// import TeamWorkSlickSlider from './Sections/TeamWorkSlickSlider'
import TeamWorkSlider from './Sections/TeamWorkSlider'
import ClientList from './Sections/ClientList'

const LandingPageMain = () => {
  return (
    <div className="text-center">
      <Banner />
      <ClientList />
      <Cards />
      <FeaturedProducts />
      <LiveVideoShopping />
      {/* <Rechart /> */}
      <LiveVideoSlider />
      <PersonalShopping />
      <CustomerReviews />
      <TeamWorkSlider />
      <DataStat />
      <Blogs />
      <GetStartedShopping />
      <ClientList />
    </div>
  )
}

export default LandingPageMain
