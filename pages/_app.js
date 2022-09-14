import '../styles/globals.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Navbar from '../components/Shared/Navbar'
import Footer from '../components/Shared/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <div>
      <Navbar />
      <div className="overflow-x-hidden">
        <Component {...pageProps} />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default MyApp
