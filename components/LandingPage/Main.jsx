import Banner from './Sections/Banner'
import Blogs from './Sections/Blogs'
import Cards from './Sections/Cards'
import CustomerReviews from './Sections/CustomerReviews'
import DataStat from './Sections/DataStat'
import GetStartedShopping from './Sections/GetStartedShopping'
import LiveVideoShopping from './Sections/LiveVideoShopping'
import Logos from './Sections/Logos'
import PersonalShopping from './Sections/PersonalShopping'
import Rechart from './Sections/Rechart'

const LandingPageMain = () => {
  return (
    <div className="text-center">
      <Banner />
      <Cards />
      <LiveVideoShopping />
      <Rechart />
      <PersonalShopping />
      <CustomerReviews />
      <DataStat />
      <Blogs />
      <GetStartedShopping />
      <Logos />
    </div>
  )
}

export default LandingPageMain
