import { useSession } from 'next-auth/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { FiLoader } from 'react-icons/fi'
import AuthenticationLogin from '../components/Authentication/AuthenticationLogin'
import LoadingLayout from '../components/Layout/LoadingLayout'

const Login = () => {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session) {
      router.push('https://golaiv-dashboard-ebbo.vercel.app/')
      return
    }
    return () => {}
  }, [session])

  if (status === 'loading') {
    return (
      <LoadingLayout>
        <div className="flex items-center justify-center space-x-2">
          <FiLoader className="animate-spin text-[#CC955C] text-[50px]" />
          <h1 className="text-2xl text-[#CC955C]">Authenticating...</h1>
        </div>
      </LoadingLayout>
    )
  }

  if (!session)
    return (
      <div className="bg-[#F5F5F5]">
        <Head>
          <title>Go Laiv | Login</title>
          <meta name="description" content="Go Laiv Login Section" />
          <meta property="og:site_name" content="Go Laiv" />
          <meta property="og:title" content="Go Laiv Login" />
          <meta property="og:description" content="Login/Register to get started…" />
          <meta property="og:url" content="https://www.golaiv.com/login" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://live-commerce-jade.vercel.app/_next/static/media/camera.3f4e1679.avif?q=80%7D&w=640"
          />
          <meta
            property="og:image:secure_url"
            content="https://live-commerce-jade.vercel.app/_next/static/media/camera.3f4e1679.avif?q=80%7D&w=640"
          />
          {/* recommended dimensions 1200×630 pixels */}
          <meta property="og:image:width" content="407" />
          <meta property="og:image:height" content="581" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:image"
            content="https://live-commerce-jade.vercel.app/_next/static/media/camera.3f4e1679.avif?q=80%7D&w=640"
          />
          {/* <meta property="twitter:site" content="@golaiv" /> */}
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <AuthenticationLogin />
      </div>
    )
}

export default Login
