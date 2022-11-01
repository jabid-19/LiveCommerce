import Aos from 'aos'
import 'aos/dist/aos.css'
import Script from 'next/script'
import { createContext, useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ModalMain from '../components/Modal/Modal'
import Footer from '../components/Shared/Footer'
import Navbar from '../components/Shared/Navbar'
import '../styles/globals.scss'

export const ModalContext = createContext()

function MyApp({ Component, pageProps }) {
  const [getStartedModal, setGetStartedModal] = useState(false)

  useEffect(() => {
    Aos.init({ duration: 1500, anchorPlacement: 'top-bottom' })
  }, [])

  return (
    <div>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-QNJEF70917"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QNJEF70917', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <ModalContext.Provider value={[getStartedModal, setGetStartedModal]}>
        <Navbar />
        <div className="overflow-x-hidden">
          <Component {...pageProps} />
          <ModalMain />
        </div>
      </ModalContext.Provider>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default MyApp
