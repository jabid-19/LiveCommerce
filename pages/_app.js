import '../styles/globals.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Navbar from '../components/Shared/Navbar'
import Footer from '../components/Shared/Footer'

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
    </div>
  )
}

export default MyApp
