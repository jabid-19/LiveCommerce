import Banner from './Sections/Banner'
import Stats from './Sections/Stats'
import Products from './Sections/Products'
import WhyShopping from './Sections/WhyShopping'
import Heading from './Sections/Heading'
import FAQ from './Sections/FAQ'

const AboutMain = () => {
  return (
    <div className="bg-slate-200">
      <Heading />
      <Banner></Banner>
      <Stats />
      <WhyShopping />
      <Products />
      <FAQ />
    </div>
  )
}

export default AboutMain
