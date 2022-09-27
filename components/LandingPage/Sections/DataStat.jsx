import { AiOutlineArrowRight, AiOutlineGlobal } from 'react-icons/ai'
import { BsFillBarChartFill } from 'react-icons/bs'
import { BiMessageDetail } from 'react-icons/bi'
import { useContext } from 'react'
import { ModalContext } from '../../../pages/_app'

const DataStat = () => {
  const [getStartedModal, setGetStartedModal] = useContext(ModalContext)
  return (
    <div className="lg:flex stats-vertical lg:stats-horizontal container mx-auto mb-12 lg:mb-36">
      <div data-aos="zoom-in-right" className="stat place-items-center">
        <div className="stat-value">
          <BsFillBarChartFill className="w-8 h-8 text-primary" />
        </div>
        <h4 className="font-bold text-2xl text-black">Data and Insights</h4>
        <p className="text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maiores sapiente harum esse
          architecto unde doloribus! Nihil dignissimos laboriosam illo est maiores, eligendi aliquid
          voluptatum vel minus nisi corrupti et?
        </p>
        <button
          className="btn btn-wide btn-primary text-white mt-4"
          onClick={() => setGetStartedModal(!getStartedModal)}>
          Get Started
          <AiOutlineArrowRight className="w-4 h-4 ml-2 text-white" />
        </button>
      </div>

      <div data-aos="zoom-in-down" className="stat place-items-center">
        <div className="stat-value">
          <BiMessageDetail className="w-8 h-8 text-primary" />
        </div>
        <h4 className="font-bold text-2xl text-black">ADA Compliance</h4>
        <p className="text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit laboriosam voluptatum quos
          ullam. Architecto autem quod exercitationem dolores eum blanditiis, quia repudiandae
          reiciendis cumque quaerat explicabo, laudantium repellendus nulla rerum.
        </p>
        <button
          className="btn btn-wide btn-primary text-white mt-4"
          onClick={() => setGetStartedModal(!getStartedModal)}>
          Get Started
          <AiOutlineArrowRight className="w-4 h-4 ml-2 text-white" />
        </button>
      </div>

      <div data-aos="zoom-in-left" className="stat place-items-center">
        <div className="stat-value">
          <AiOutlineGlobal className="w-8 h-8 text-primary" />
        </div>
        <h4 className="font-bold text-2xl text-black">Global Coverage</h4>
        <p className="text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident iure eum, sed dolore,
          soluta iusto ex commodi beatae consectetur doloremque atque rerum nam ea ullam odit
          accusantium maxime tempora at!
        </p>
        <button
          className="btn btn-wide btn-primary text-white mt-4"
          onClick={() => setGetStartedModal(!getStartedModal)}>
          Get Started
          <AiOutlineArrowRight className="w-4 h-4 ml-2 text-white" />
        </button>
      </div>
    </div>
  )
}

export default DataStat
