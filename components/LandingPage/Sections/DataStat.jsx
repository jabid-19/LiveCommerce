import { AiOutlineArrowRight, AiOutlineGlobal } from 'react-icons/ai'
import { BsFillBarChartFill } from 'react-icons/bs'
import { BiMessageDetail } from 'react-icons/bi'
import { useContext } from 'react'
import { ModalContext } from '../../../pages/_app'
const DataStat = () => {
  const [getStartedModal, setGetStartedModal] = useContext(ModalContext)
  return (
    <div className="lg:flex stats-vertical lg:stats-horizontal container mx-auto mb-12 lg:mb-36">
      <div
        data-aos="zoom-in-right"
        data-aos-anchor-placement="top-bottom"
        className="stat place-items-center">
        <div className="stat-value">
          <BsFillBarChartFill className="w-8 h-8 text-primary" />
        </div>
        <h4 className="font-bold text-2xl text-black">Data and Insights</h4>
        <p className="text-black">
          We unlock powerful insights by tapping into data and bring game-changing results for your
          business that you didn’t even dream of. We assist you chase after your competitors
          analyzing your data that generates revenue and growth of your business.
        </p>
        <button
          className="btn btn-wide btn-primary normal-case text-white mt-4"
          onClick={() => setGetStartedModal(!getStartedModal)}>
          Get started
          <AiOutlineArrowRight className="w-4 h-4 ml-2 text-white" />
        </button>
      </div>

      <div
        data-aos="zoom-in-down"
        data-aos-anchor-placement="top-bottom"
        className="stat place-items-center">
        <div className="stat-value">
          <BiMessageDetail className="w-8 h-8 text-primary" />
        </div>
        <h4 className="font-bold text-2xl text-black">ADA Compliance</h4>
        <p className="text-black">
          We believe in equality and abide by the rules and regulations of the country and for that
          we ensure your virtual services are accessible to people with disabilities. We provide
          online users the ADA compliance tool.
        </p>
        <button
          className="btn btn-wide btn-primary normal-case text-white mt-4"
          onClick={() => setGetStartedModal(!getStartedModal)}>
          Get started
          <AiOutlineArrowRight className="w-4 h-4 ml-2 text-white" />
        </button>
      </div>

      <div
        data-aos="zoom-in-left"
        data-aos-anchor-placement="top-bottom"
        className="stat place-items-center">
        <div className="stat-value">
          <AiOutlineGlobal className="w-8 h-8 text-primary" />
        </div>
        <h4 className="font-bold text-2xl text-black">Global Coverage</h4>
        <p className="text-black">
          Create virtual content and make it visible to the people of the world within seconds. We
          are committed to making sure of your services worldwide. Our team of experts makes you a
          global presence.
        </p>
        <button
          className="btn btn-wide btn-primary normal-case text-white mt-4"
          onClick={() => setGetStartedModal(!getStartedModal)}>
          Get started
          <AiOutlineArrowRight className="w-4 h-4 ml-2 text-white" />
        </button>
      </div>
    </div>
  )
}

export default DataStat
