import Banner from './Sections/Banner'
import Stats from './Sections/Stats'
import Products from './Sections/Products'
import WhyShopping from './Sections/WhyShopping'
import Heading from './Sections/Heading'
import Faq from '../Shared/Faq'

const AboutMain = () => {
  const headingContent = {
    pageTitleMain: 'GoLiav',
    pageTitle: '- Your ultimate destination!',
    title: 'How we work for your business growth ',
    details:
      "Connect with unlimited customers by hosting shoppable live streams or pre-recorded videos on your native website. This doesn't matter where they are!",
    buttonContent1: 'Get started',
    buttonContent2: 'Watch demo',
  }
  return (
    <div className="bg-[#e8e4d9]">
      <Heading headingContent={headingContent} />
      <Banner></Banner>
      <Stats />
      <WhyShopping />
      <Products />
      <Faq />
    </div>
  )
}

export default AboutMain
