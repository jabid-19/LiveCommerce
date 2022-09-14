import Banner from './Sections/Banner'
import Blogs from './Sections/Blogs'
import Cards from './Sections/Cards'
import CustomerReviews from './Sections/CustomerReviews'
import DataStat from './Sections/DataStat'
import FeaturedProducts from './Sections/FeaturedProducts'
import GetStartedShopping from './Sections/GetStartedShopping'
import LiveVideoShopping from './Sections/LiveVideoShopping'
import LiveVideoSlider from './Sections/LiveVideoSlider'
import PersonalShopping from './Sections/PersonalShopping'
import TeamWorkSlider from './Sections/TeamWorkSlider'
import Companies from '../Shared/Companies'
import Features from '../Packages/One-To-One/section/Features'

const LandingPageMain = () => {
  return (
    <div className="text-center bg-slate-200">
      <Banner />
      <Features />
      <div className="bg-primary mt-20">
        <hr className="border-black"></hr>
        <Companies />
        <hr className="border-black"></hr>
      </div>
      <FeaturedProducts />
      <Cards />
      <LiveVideoShopping />
      <LiveVideoSlider />
      <PersonalShopping />
      <CustomerReviews />
      <TeamWorkSlider />
      <DataStat />
      <Blogs />
      <GetStartedShopping />
      <Companies />
    </div>
  )
}

export default LandingPageMain
