import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ModalMain from '../components/Modal/Modal'
import Footer from '../components/Shared/Footer'
import Navbar from '../components/Shared/Navbar'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  const [getStartedModal, setGetStartedModal] = useState(false)

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <div>
      <Navbar />
      <div className="overflow-x-hidden">
        <Component getStartedModal={getStartedModal} setGetStartedModal={setGetStartedModal} {...pageProps} />
        <ModalMain getStartedModal={getStartedModal} setGetStartedModal={setGetStartedModal} />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default MyApp
