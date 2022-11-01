import Aos from 'aos'
import 'aos/dist/aos.css'
import { createContext, useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ModalMain from '../components/Modal/Modal'
import Footer from '../components/Shared/Footer'
import Navbar from '../components/Shared/Navbar'
import '../styles/globals.scss'
import { SessionProvider } from 'next-auth/react'

export const ModalContext = createContext()

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [getStartedModal, setGetStartedModal] = useState(false)

  useEffect(() => {
    Aos.init({ duration: 1500, anchorPlacement: 'top-bottom' })
  }, [])

  return (
    <div>
      <ModalContext.Provider value={[getStartedModal, setGetStartedModal]}>
        <Navbar />
        <div className="overflow-x-hidden">
          <SessionProvider session={session}>
            <Component {...pageProps} />
          </SessionProvider>
          <ModalMain />
        </div>
      </ModalContext.Provider>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default MyApp
