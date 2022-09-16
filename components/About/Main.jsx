import Banner from './Sections/Banner'
import Stats from './Sections/Stats'
import Products from './Sections/Products'
import WhyShopping from './Sections/WhyShopping'
import Heading from './Sections/Heading'
import Faq from '../Shared/Faq'

const AboutMain = () => {
  return (
    <div className="bg-slate-200">
      <Heading />
      <Banner></Banner>
      <Stats />
      <WhyShopping />
      <Products />
      <Faq />
    </div>
  )
}

export default AboutMain
